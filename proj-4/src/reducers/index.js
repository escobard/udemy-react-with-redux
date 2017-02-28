import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';

// this imports a reducer and sets is as a form reducer
// first argument is the reducer from redux forms, second reducer is the variable we want the form reducer to be set to
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
	posts: PostsReducer,

	// this needs to be called 'form', or it will NOT work
	form: formReducer
});



export default rootReducer;
