import React from 'react';

import Dashboard from 'DashboardRemote/dashboard'
import {PageLayout, SIZE, TextHeader} from "@evive/ui-kit";

import './container.css';

export const Container = () => {
	const getUserBar = () => (
		<div className='container-user-bar'>
			<PageLayout>
				<div className='container-user-bar-inner'>
					<TextHeader size={SIZE.XXL}>Evive</TextHeader>
					<TextHeader size={SIZE.XXL}>Logout</TextHeader>
				</div>
			</PageLayout>
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
