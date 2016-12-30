// =============================================================
// 
// 	actions/index.js
//
// =============================================================

// includes our axios API
import axios from 'axios';

// MIDDLEWARES have the ability to block, modify or just let pass through actions BEFORE they hit a reducer (which contains App.state data)
// to re-iterate, we only change our application state through our reducers
const API_KEY = '7588eeb65b45661378601702a0a9b7f1';

// this is the API base url
// for EMC5 this will work : const ROOT_URL ='http://api.openweathermap.org/data/2.5/forecast?appid='+ API_KEY;
// 
// for EMC6 we can use the following: 
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// we are creating the type value as a variable, so we can export this
// this is done to keep our action types consistent between our action creators and our reducers
// 
export const FETCH_WEATHER ='FETCH_WEATHER';

// no need to create this in another file, as it's the main action of this application
// also passing along an argument for the selected CITY
function fetchWeather(city){

	// this grabs the ROOT_URL placed above, which has our API and the base URL needed for the request
	// it then places the city argument (which will be the result of the search string) into the url const
	// creating our URL for the ajax request, more on this API's URL method here = https://openweathermap.org/forecast5
	// the last thing is the country code, which for the purposes of this application we will leave as the US
	const url = `${ROOT_URL}&q=${city},us`;

	// calls the ajax request with axios
	const request = axios.get(url);

	// to avoid the convulted overkill application of jQuery for this small app, we will be using another library to generate our
	// AJAX request called axios
	// this library is made solely for making ajax requests to the browser
	return {
		
		type: FETCH_WEATHER;
		
		// now that we have the DevOps figured out for the AJAX request, we can create the payload key value for this action
		payload: request;
	};

}

export default fetchWeather;