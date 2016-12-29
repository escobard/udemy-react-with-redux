// imported two different functions from the same library, here's how:
import React from 'react';
import { Component } from 'react';

// imports our booklist
import BookList from '../containers/book_list';

export default class App extends Component {
  render() {
    return (
      <div>
		<BookList />
      </div>
    );
  };
};
