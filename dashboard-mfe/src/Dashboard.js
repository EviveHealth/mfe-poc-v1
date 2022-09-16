import React from 'react';

import Callouts from 'CalloutsRemote/callouts'
import Benefits from 'BenefitsRemote/benefits'
import CurrentStatus from 'CurrentStatusRemote/currentStatus'

const Dashboard = () => (
	<div>
		<div>Dashboard Container</div>
		<Callouts />
		<Benefits />
		<CurrentStatus />
	</div>
);

export default Dashboard;