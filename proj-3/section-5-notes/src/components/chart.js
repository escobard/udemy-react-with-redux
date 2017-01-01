// =============================================================
// 
// 	chart.js
//
// =============================================================

// this was created since we will be using the same code multiple times to generate the weather charts

import React from 'react';

// imports the chart API for reat, Sparklines, more on that here : https://github.com/borisyankov/react-sparklines
import { Sparklines, SparklinesLine} from 'react-sparklines';

// trying to use an ES6 function here
export default (props) => {
	return (
		<div>
			<Sparklines height={120} width={180} data={props.chartData}>
				<SparklinesLine color={props.color} />
			</Sparklines>
		</div>
		
	);

}

