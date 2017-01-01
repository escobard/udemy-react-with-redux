// =============================================================
// 
// 	actions/index.js
//
// =============================================================

import React, { Component } from 'react';
import {connect} from 'react-redux';

// imports the chart API for reat, Sparklines, more on that here : https://github.com/borisyankov/react-sparklines
import { Sparklines, SparklinesLine} from 'react-sparklines';

class WeatherList extends Component {
	renderWeather(cityData){
		
		// this assigns a var to our cityData
		const cityName = cityData.city.name;

		// for our sparklines charts to work, we basically just need an array of numbers, which is what is passed into the temps const
		// after mapping the correct data
		// 
		// this basically grabs the cityData.list object, then maps out every child array with a function
		const temps = cityData.list.map(weatherInfo => 
			// this then grabs all the VALUES of the temp array, which contains the city's temperature for the next 5 days
			weatherInfo.main.temp);
		console.log(temps);

		return(

			<tr key={cityName}>
				
				<td>{cityName}</td>
				<td>
					<Sparklines height={120} width={180} data={temps}>
						<SparklinesLine color="red" />
					</Sparklines>
				</td>
				
			</tr>

		);
	}
	
	render(){
		return(

			<table className="table table-hover">

				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>

			</table>

		);
	}

}

// this is how it's usually written, to pass the state.weather object into this container
/* function mapStateToProps(state){
	return {weather: state.weather};
} */

// we can also write it with EMC6 syntax
 function mapStateToProps({ weather }){

 	// this is how the function now looks
 	/*
	return { weather: weather }; */

	//this can be further condensed with ES6 like so:
	// because both the key and the value object have the same identifier
	return { weather };
}

// if we are adding a reducer, we use mapstate to props, which is the first argument of connect, the second argument can be left empty
// since there are no actions here
export default connect(mapStateToProps)(WeatherList);