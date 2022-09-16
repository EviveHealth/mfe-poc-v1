import React from 'react';
// import ReactDOM from 'react-dom/client'; // React 18
import ReactDOM from 'react-dom';

import '@evive/ui-kit/dist/index.css';
import CurrentStatus from "./CurrentStatus";


ReactDOM.render(
	<React.StrictMode>
		<CurrentStatus />
	</React.StrictMode>,
	document.getElementById('root'),
);
