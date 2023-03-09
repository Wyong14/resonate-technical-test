import React from "react";
import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import "./UserInfo.css";
import ResonateLogo from "./ResonateLogo.png"
function UserInfo() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(3);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    console.log("updated usersPerPage")
  }, [usersPerPage]);

  // Logic for displaying users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li key={number}>
        <button
          className={currentPage === number ? "active" : ""}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </button>
      </li>
    );
  });

  return (
    <div className="container">
      <br /><br />
      <img src={ResonateLogo} alt="Resonate Logo"/>
      <br />
      <h1>Contact Application</h1>
      <h4>Powered by SaaS</h4>
      <label for="num-select">Choose number of contacts to display per page : </label>
      <select value={usersPerPage} name="num-contacts" id="num-select" onChange={(e) => setUsersPerPage(e.target.value)}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
      </select>
      <div className="card-container">
        {currentUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <ul className="page-numbers">{renderPageNumbers}</ul>
    </div>
  );
}

export default UserInfo;

