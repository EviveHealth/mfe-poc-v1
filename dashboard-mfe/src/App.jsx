import React from 'react';
// import ReactDOM from 'react-dom/client'; // React 18
import ReactDOM from 'react-dom';

import '@evive/ui-kit/dist/index.css';
import Dashboard from "./Dashboard";


ReactDOM.render(
	<React.StrictMode>
		<Dashboard />
	</React.StrictMode>,
	document.getElementById('root'),
);
