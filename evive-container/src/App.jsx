import React from 'react';
// import ReactDOM from 'react-dom/client'; // React 18
import ReactDOM from 'react-dom';

import '@evive/ui-kit/dist/index.css';

import {Container} from "./Contianer";
import Auth0Wrapper from "./Auth0Wrapper";
import {UseApiProvider} from "@evive/ui-kit";

import './app.css'

ReactDOM.render(
	<React.StrictMode>
		<Auth0Wrapper>
			<UseApiProvider>
				<Container />
			</UseApiProvider>
		</Auth0Wrapper>
	</React.StrictMode>,
	document.getElementById('root'),
);
