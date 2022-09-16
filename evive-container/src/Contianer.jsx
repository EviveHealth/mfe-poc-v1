import React, {useCallback, useEffect, useState} from 'react';

import Dashboard from 'DashboardRemote/dashboard'
import {FullPageLoader, PageLayout, SIZE, TextHeader} from "@evive/ui-kit";

import './container.css';
import {useAuth0} from "@auth0/auth0-react";
import {Buffer} from "buffer";

export const Container = () => {
	const {
		isAuthenticated, loginWithRedirect, isLoading, error, getAccessTokenSilently
	} = useAuth0();

	const [auth0Token, setAuth0Token] = useState("");

	const redirectToLoginPage = useCallback(
		() => {
			const fn = async () => {
				try {
					await loginWithRedirect({
						appState: {
							targetPath: location.pathname,
							targetSearch: location.search,
						},
					});
				} catch (e) {
					// logger.error(
					//   'PrivateRoute', 'error in redirecting to auth0', e,
					// );
				}
			};
			fn();
		}, [],
	);

	const getUserData = async () => {
		if (isAuthenticated) {
			const token = await getAccessTokenSilently();
			const base64Url = token.split('.')[1];
			const base64 = base64Url.replace(
				'-', '+',
			).replace(
				'_', '/',
			);

			const decodedData = JSON.parse(Buffer.from(
				base64, 'base64',
			).toString('binary'));

			// api.defaults.headers.common.Authorization = `Bearer ${token}`;
			setAuth0Token(token);
		}
	};

	useEffect(
		() => {
			if (!isAuthenticated && !isLoading) {
				redirectToLoginPage();
			} else {
				getUserData();
			}
		}, [redirectToLoginPage, isLoading, isAuthenticated],
	);

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

	if(!auth0Token) {
		return <FullPageLoader />
	}

	console.log('CONTAINER TOKEN', auth0Token);
	return (
		<div>
			{getUserBar()}
			<PageLayout>
				<div>Container</div>
				<Dashboard auth0Token={auth0Token} />
			</PageLayout>
		</div>
	)
}
