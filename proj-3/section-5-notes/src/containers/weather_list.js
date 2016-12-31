// =============================================================
// 
// 	actions/index.js
//
// =============================================================

import React, { Component } from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {
	renderWeather(cityData){

		const cityName = cityData.city.name;
		
		return(

			<tr key={cityName}>
				
				<td>
					{cityName}
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