import React from 'react';

import Dashboard from 'DashboardRemote/dashboard'
import {PageLayout} from "@evive/ui-kit";

export const Container = () => {
	const getUserBar = () => (
		<div>
			UserBar
		</div>
	)
	return (
		<div>
			{getUserBar()}
			<PageLayout>
				<div>Container</div>
				<Dashboard />
			</PageLayout>
		</div>
	)
}
