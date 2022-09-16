import React from 'react';

import Dashboard from 'DashboardRemote/dashboard'
import Callouts from 'CalloutsRemote/callouts'
import Benefits from 'BenefitsRemote/benefits'
import CurrentStatus from 'CurrentStatusRemote/currentStatus'

export const Container = () => (
	<div>
	<div>Container</div>
		<Dashboard />
		<Callouts />
		<Benefits />
		<CurrentStatus />
	</div>
)
