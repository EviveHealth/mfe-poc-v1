import React from 'react';
import {Auth0Provider} from "@auth0/auth0-react";

const Auth0Wrapper = ({children}) => {
	return (
		<Auth0Provider
			domain={"https://myevive-lite-dev.auth0.com"}
			clientId={"zA7nxTlRW6EhUZ7YqGe8KPfR2nTUPxle"}
			scope={"openid profile email"}
			audience={"https://api.testevivecare.com"}
			redirectUri={"http://localhost:8080"}
		>
			{children}
		</Auth0Provider>
	);
}

export default Auth0Wrapper;