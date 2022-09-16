import React, {useEffect} from 'react';


import Callouts from 'CalloutsRemote/callouts'
import Benefits from 'BenefitsRemote/benefits'
import CurrentStatus from 'CurrentStatusRemote/currentStatus'
import {UseApi} from "@evive/ui-kit";

const Dashboard = ({auth0Token}) => {

	const {apiGet} = UseApi();

	useEffect(() => {
		apiGet("/planchoice/api/configuration").then((depsResponseData) => {
			console.log("DASHBOARD API RESPONSE 2", depsResponseData.data)
		})
	}, [apiGet]);


	console.log("DASHBOARD AUTH 0 TOKEN", auth0Token ? auth0Token.substring(0,10) : "no token")
	return (
		<div>
			<div>Dashboard Container</div>
			<Callouts auth0Token={auth0Token} />
			<Benefits auth0Token={auth0Token} />
			<CurrentStatus auth0Token={auth0Token} />
		</div>
	);
}

export default Dashboard;
