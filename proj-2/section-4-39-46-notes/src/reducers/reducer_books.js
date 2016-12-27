// =============================================================
// 
// 	reducer_books.js
//
// =============================================================
 
// more on reducers here : http://redux.js.org/docs/basics/Reducers.html
// in short, a reducer is a function that returns a piece of the application's state / model / data
// reducers produce the VALUE of our state
// good to keep in mind that each piece of the app should be named after the folder its in, to be concise

// create the JS to hold the book data
function booksReducer() {
	
	// returns an array with our data
	return [

		{ title: 'Javascript: The Good Parts' },
		{ title: 'Harry Potter'},
		{ title: 'Dark Tower'},
		{ title: 'Eloquent Ruby'},
	
	]
}

export default booksReducer;