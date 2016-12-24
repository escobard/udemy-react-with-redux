// components / views: something that creates HTML
// create a new component. This component should produce some HTML


// es 2016 syntax : REACT and ES 6 code, will be described as such throughout the course
// create app const. more on const here : https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/const
// const declares a variable that is never going to change 
// 
// 
const App = function (){
	// JSX allows us to write what looks like HTML but is really just javascript behind the scenes
	// this is transpired by bable that polyfills / compiles code before it hits the browser
	return <div>Hi!</div>;
};


// take this component's HTML and put it on the page (in the DOM)
