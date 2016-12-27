// =============================================================
// 
// 	reducers/index.js
//
// =============================================================
// 
// more on reducers here : http://redux.js.org/docs/basics/Reducers.html
// in short, a reducer is a function that returns a piece of the application's state / model / data
// reducers produce the VALUE of our state
// good to keep in mind that each piece of the app should be named after the folder its in, to be concise

// imports combineReducers component from 'redux'
import { combineReducers } from 'redux';

// imports the data from reducer_books.js
import booksReducer from './reducer_books'

// this function below is what maps our state reducers, joining all of them together for react to use
const rootReducer = combineReducers({

	// this assigns the book key to our bookReducer function
	// where book is the key of the data state
	// and booksReducer is the value of that data state
	books: booksReducer;

});

export default rootReducer;
