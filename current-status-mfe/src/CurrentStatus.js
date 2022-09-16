import React from 'react';
import {Button, SIZE, TextBody, TextHeader} from "@evive/ui-kit";

import './current-status.css';

const CurrentStatus = () => (
	<div>
		<TextHeader size={SIZE.XL} className='current-status-header'>Current Balances</TextHeader>
		<TextBody size={SIZE.M}>All of your account balances in one place</TextBody>
		<img src='http://localhost:8084/assets/Callouts.jpeg' alt='Current status' className='current-status-image'/>
		<Button fullWidth>See all balances</Button>
	</div>
);

export default CurrentStatus;
