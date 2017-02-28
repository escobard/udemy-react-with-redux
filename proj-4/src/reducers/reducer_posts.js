import {FETCH_POSTS} from '../actions/index';


const INITIAL_STATE = {
	// sets two different sets of state, one is going to be an array to grab ALL the posts, shown below
	all: [],
	
	// this sets the default state for the selected post, which on initial render must be null
	post: null
};

export default function(state = INITIAL_STATE, action){

	// returns initial state if the switch statement does not find any relevant data within the app
	// the switch main variable is action.type, which makes the cases everything AFTER action.type
	// for example, action.type itself with no value, returns the initial state
	// and action.type.FETCH_POSTS, will activate the case to return our payload into the state
	switch(action.type){
		case FETCH_POSTS:
			// the ...state call returns whatever the CURRENT state is, then since the 'all:[]' is already set, this returns
			// the payload data, and passes it into the all key of the state
			// the action.payload is the response from the api
			// the action.payload.data is the response from the AXIOS promise, which returns the resolved promise as an object
			// called .data
			return { ...state, all:action.payload.data }
		default:
			return state;
	};


};