// =============================================================
// 
// 	reducer_weather.js
//
// =============================================================

// creates the reducer for our weather data post middleware
function weatherReducer(state = null, action){
	
	// this returns the RESOLVE state of the promise, thanks to the middleware 'redux-promise', which resolves the promise
	// then returns the data response as our action payload
	console.log('Action received', action);
	return state;
};

export default weatherReducer;