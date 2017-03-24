// this action creator will reach out and grab our list of blog posts from the API
// this is an example of how to call multiple actions in a single file, if only a single file is better to handle
// multiple AJAX calls

import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
// action creator to create a new post

// since these needs to be fetched before the action, we set them outside of the action itself
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=asidfruaeihfsusiuf';

export function fetchPosts(){
	
	// fetches the URL payload
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	return {
		type: FETCH_POSTS,
		payload: request
	};
	
};


// this is the options to create post
export function createPost(props) {
	// this handles a POST request with axios rather than get
	// passes the props data into the API
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

	return {
		type: CREATE_POST,
		payload: request
	}; 
}