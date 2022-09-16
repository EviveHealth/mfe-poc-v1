import React from 'react';
// import ReactDOM from 'react-dom/client'; // React 18
import ReactDOM from 'react-dom';

import '@evive/ui-kit/dist/index.css';
import {Container} from "../Contianer";

ReactDOM.render(
	<React.StrictMode>
		<Container />
	</React.StrictMode>,
	document.getElementById('root'),
);
