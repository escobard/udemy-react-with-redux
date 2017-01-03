// =============================================================
// 
// 	chart.js
//
// =============================================================

// this was created since we will be using the same code multiple times to generate the weather charts

import React from 'react';

// imports lodash command library, more on lodash here : https://github.com/lodash/lodash
import _ from 'lodash';

// imports the chart API for reat, Sparklines, more on that here : https://github.com/borisyankov/react-sparklines
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

// creates the avarage function
function avarage(data) {
		
	return _.round(_.sum(data)/data.length);
};

// trying to use an ES6 function here
export default (props) => {
	return (
		<div>
			<Sparklines height={120} width={180} data={props.chartData}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>{avarage(props.chartData)} {props.units}</div>
		</div>
		
	);

}

