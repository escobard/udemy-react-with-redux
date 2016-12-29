// =============================================================
// 
// 	book_detail.js
//
// =============================================================

// since the book detail (meaning the area that displays the ACTIVE BOOK) makes use of this app's reducers, this is created as a 
// CONTAINER not a component

import React, { Component } from 'react';

// since this component is a container, the connect function must be included
import { connect } from 'react-redux';

class BookDetail extends Component {

	render(){
		return (
		<div>Book Detail!</div>
		);
	}
	
}

// for more on how this works, refer to book_list.js
function mapStateToProps(state){
	
	// again, whatever we return from here is usable by the BookDetails class, under props
	return {
		
		book: state.activeBook

	};

}

// connects the activeBook reducer to this component, making it a container by definition
export default connect (mapStateToProps) (BookDetail);