import React from 'react';
import {Button, SIZE, TextBody, TextHeader} from "@evive/ui-kit";

import './current-status.css';

const CurrentStatus = ({auth0Token}) => {
	console.log("CURRENT STATUS AUTH 0 TOKEN", auth0Token ? auth0Token.substring(0,10) : "no token")
	return (
		<div>
			<TextHeader size={SIZE.XL} className='current-status-header'>Current Balances</TextHeader>
			<TextBody size={SIZE.M}>All of your account balances in one place</TextBody>
			<img src='http://localhost:8084/assets/CurrentStatus.jpeg' alt='Current status' className='current-status-image'/>
			<Button fullWidth>See all balances</Button>
		</div>
	);
}

export default CurrentStatus;
