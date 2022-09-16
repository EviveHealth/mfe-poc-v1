import React from 'react';

import './benefits.css';
import {CardBase, Grid, TextBody, TextHeader} from "@evive/ui-kit";

const Benefits = ({auth0Token}) => {
	console.log("BENEFITS AUTH 0 TOKEN", auth0Token ? auth0Token.substring(0,10) : "no token")
	return (
		<div>
			<div> Benefits</div>
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
							<TextHeader>Card 1</TextHeader>
							<TextBody>Description</TextBody>
						</div>
					</CardBase>
				</Grid>
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
							<TextHeader>Card 1</TextHeader>
							<TextBody>Description</TextBody>
						</div>
					</CardBase>
				</Grid>
			</Grid>
		</div>
	);
}

export default Benefits;
