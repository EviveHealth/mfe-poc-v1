import React from 'react';

import './benefits.css';
import {CardBase, Grid, TextBody, TextHeader} from "@evive/ui-kit";

const Benefits = () => (
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

export default Benefits;
