// =============================================================
// 
// actions/index.js
// 
// =============================================================
// 
// Actions create objects which are passed to the reducer, and then if true, passed to the application state, updating the application
// state if the action condition is true

function selectBook(book){
	console.log('A book has been selected:', book.title);
};

// this needs to be attached over to book_list.js and the rest of the app, so we export
export default selectBook;