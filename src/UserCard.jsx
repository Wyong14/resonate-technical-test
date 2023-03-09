import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageIcon from '@mui/icons-material/Language';

function UserCard({ user }) {
  return (
    <>
		{console.log(user)}
		<div className="card">
			<div className="card-header">
				<h2>{user.name}</h2>
				<h5 style={{fontStyle: "italic", marginBottom: "-10px",}}>"{user.company.catchPhrase}"</h5>
				<p style={{fontWeight: 1, fontSize: "0.7em"}}>- {user.company.name}</p>
			</div>
			<div className="card-body">
				<div style={{margin: "10px"}}>
					<EmailIcon style={{ position: "relative", top: "7px"}}></EmailIcon> : {user.email}
				</div>
				<div style={{margin: "10px"}}>
					<LocalPhoneIcon style={{ position: "relative", top: "7px"}}></LocalPhoneIcon> : {user.phone}
				</div>
				<div style={{margin: "10px"}}>
					<LocationOnIcon style={{ position: "relative", top: "7px"}}></LocationOnIcon> : {user.address.city}
				</div>
				<div style={{margin: "10px"}}>
					<AccountCircleIcon style={{ position: "relative", top: "7px"}}></AccountCircleIcon> : {user.username}
				</div>
				<div style={{margin: "10px"}}>
					<LanguageIcon style={{ position: "relative", top: "7px"}}></LanguageIcon> : {user.website}
				</div>
			</div>
		</div>
    </>
  );
}

export default UserCard;