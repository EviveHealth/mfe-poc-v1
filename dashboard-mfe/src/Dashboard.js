import React from 'react';

import Callouts from 'CalloutsRemote/callouts'
import Benefits from 'BenefitsRemote/benefits'
import CurrentStatus from 'CurrentStatusRemote/currentStatus'

const Dashboard = ({auth0Token}) => {
	console.log("DASHBOARD AUTH 0 TOKEN", auth0Token ? auth0Token.substring(0,10) : "no token")
	return (
		<div>
			<div>Dashboard Container</div>
			<Callouts />
			<Benefits />
			<CurrentStatus />
		</div>
	);
}

export default Dashboard;