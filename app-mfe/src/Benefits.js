import React, {useEffect, useMemo, useState} from 'react';
import queryString from 'query-string';
import {Button, CardBase, Grid, TextBody, TextHeader} from "@evive/ui-kit";
import axios from "axios";

import './benefits.css';

console.log('Location', location.search);
const api = axios.create({});



const Benefits = () => {

	const [apiData, setApiData] = useState('');

	const parsedUrl = queryString.parseUrl(window.location.href);
	const accessToken = parsedUrl.query.token;

	const displayData = useMemo(
		() => {
			if (apiData) {
				return JSON.stringify(apiData.data);
			}
			return '';
		}, [apiData],
	);

	const apiCall = async () => {
		console.log('Token', accessToken);
		let config = {
			headers: {
				// 'Content-Type': 'application/json',
				'Authorization': `Bearer ${accessToken}`
				// origins: '*',
				// 'Access-Control-Allow-Origin': '*',
				// 'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlBBM2E3X1ZOVG5GS2trb0p3TTZVdCJ9.eyJodHRwczovL2V2aXZlLmlvL3VwaW4iOiJURVNUX0RJU19QTEFfVVNFUjEyIiwiaHR0cHM6Ly9ldml2ZS5pby9wZXJzb25hIjoibWVtYmVyIiwiaHR0cHM6Ly9ldml2ZS5pby9jdXN0b21lcl9pZCI6IjIwMzEiLCJpc3MiOiJodHRwczovL2FjY291bnRzLmRldi5ldml2ZS5pby8iLCJzdWIiOiJhdXRoMHxURVNUX0RJU19QTEFfVVNFUjEyIiwiYXVkIjpbImh0dHBzOi8vYXBpLnRlc3Rldml2ZWNhcmUuY29tIiwiaHR0cHM6Ly9teWV2aXZlLWxpdGUtZGV2LmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2NjQyNjI5MDAsImV4cCI6MTY2NDM0OTMwMCwiYXpwIjoib2oybEwwT0o0NXNTNGVLWlNTbUswMEtlSTM3SnF6VlMiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwicGVybWlzc2lvbnMiOltdfQ.CtNUgkp7oZoTgrHhhe0cTjkwiuiN3eGMwmBYeCdzaKW_lxlhdED2nOfqnzeHLePz0ZZKbjM-8NgNccmgSs5HAfvfw1y-7pMTQmNLwCfxuvL-PNLK4aGDYZt2pKx344hrkdMBkdtOe_XlHDJo7Nb4Zh4D5we7CLXzy4XYnrBQxSQ4drN5tBc9toH9twrHGINGCBMEL1J38FkzaAbuLkMjAivYsRvkQInl3WvITcanCMPpC1nccbi_NWXQNkxYBnH6gAU-oYPEJKsXOx4HOorByQiQ8TM-Q_QAaxNo9JMaXQu3cPe24_IjcUB0E4fdtwcmnEc27tdyUeqLIQ2mRs1Nug`
			}
		}
		try {
			const apiResponse = await api.get("http://localhost:8086/planchoice/api/user-dependents/user-flow-details?planType=MEDICAL", config)
			console.log('API Response', apiResponse);
			setApiData(apiResponse);
		}
		catch (e) {
			console.log('Error', e);
		}
		// const apiResponse = await api.get("https://pc.dev.myevive.me/planchoice/api/user-dependents/user-flow-details")
		// console.log(apiResponse);
	}

	return (
		<div style={{marginTop: 16}}>
			{/*<div>{JSON.stringify(parsedUrl.query.token)}</div>*/}
			{displayData && <div>{displayData}</div>}
			<Grid container>
				<Grid colSpan={3}>
					<CardBase>
						<div>
							<TextHeader>Card 1</TextHeader>
							<TextBody>Description</TextBody>
						</div>
					</CardBase>
				</Grid>
				<Grid colSpan={3}>
					<CardBase>
						<div>
							<TextHeader>Card 2</TextHeader>
							<TextBody>Description</TextBody>
						</div>
					</CardBase>
				</Grid>
			</Grid>
			<div style={{marginTop: 16}}>
				<Button small onClickHandler={apiCall}>API CALL</Button>
			</div>
		</div>
	);
}

export default Benefits;
