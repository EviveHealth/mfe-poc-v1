import React from 'react';
// import ReactDOM from 'react-dom/client'; // React 18
import ReactDOM from 'react-dom';

import '@evive/ui-kit/dist/index.css';
import Callouts from "./Callouts";


ReactDOM.render(
	<React.StrictMode>
		<Callouts />
	</React.StrictMode>,
	document.getElementById('root'),
);
