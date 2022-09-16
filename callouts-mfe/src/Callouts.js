import React from 'react';
import {AnchorButton, SIZE, TextBody, TextHeader} from "@evive/ui-kit";

import './callouts.css';

const Callouts = ({auth0Token}) => {
	console.log("CALLOUTS AUTH 0 TOKEN", auth0Token ? auth0Token.substring(0,10) : "no token")
	return (
		<div>
			<TextHeader size={SIZE.XL} className='callouts-header'>Tips for today</TextHeader>
			<div className='callouts-content'>
				<TextBody size={SIZE.M}  className='callouts-tips'>4 new benefit tips</TextBody>
				<AnchorButton>See all 6</AnchorButton>
			</div>
			<img src='http://localhost:8082/assets/Callouts.jpeg' alt='Callout' className='callouts-image'/>
		</div>
	)
};

export default Callouts;
