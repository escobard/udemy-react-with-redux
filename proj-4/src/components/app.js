import React, { Component } from 'react';

export default class App extends Component {
  render() {
  	// using the {this.props.children}, we can render the other components that are nested within app, refer to ./routes.jsx
    return (
      <div>
		{this.props.children}
      </div>
    );
  }
}
