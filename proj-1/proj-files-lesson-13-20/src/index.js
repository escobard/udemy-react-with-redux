// =============================================================
// 
// 	Index.js
// 
// Review notes of proj-1-files-lesson-13-20 for notes prior to this point
// 
// =============================================================
 
// imports
import React from 'react';
import ReactDOM from 'react-dom';

// imports SearchBar
// 
// note: this does not work, since to get a component from a directory that is not your app components, you need to add an actual file 
// reference by using a relative path to the file we are importing it from
// to grab the correct file; as such, the following will throw an error : import SearchBar from 'search_bar'
// 
// this is how to grab from local JS components:
// 
import SearchBar from './components/search_bar.js'

// this is the youtube API key to access video data
// 
const API_KEY = 'AIzaSyADgejrRxwevOdD8LPoBTpFjIzOQ0mKlVw';


// 'App' components original : 
/*
const App = () => {
	return <div>Hi!</div>;
}
*/

// 'App' components after section 1 lecture 14
const App = () => {
	
	//returns our app container div
	// returns our search bar component input, as <SearchBar />
	return <div>
		
		
		<SearchBar />

	</div>
}

// 'App' render into the DOM
ReactDOM.render(<App/>, document.querySelector('.container'))