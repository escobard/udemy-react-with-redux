// this action creator will reach out and grab our list of blog posts from the API

import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

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