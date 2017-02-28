import {FETCH_POSTS} from '../actions/index';


const INITIAL_STATE = {
	// sets two different sets of state, one is going to be an array to grab ALL the posts, shown below
	all: [],
	
	// this sets the default state for the selected post, which on initial render must be null
	post: null
};

export default function(state = INITIAL_STATE, action){

	// returns initial state if the switch statement does not find any relevant data within the app
	switch(action.type){
		case FETCH_POSTS:
			
		default:
			return state;
	};


};