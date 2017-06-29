import { FETCH_POSTS } from '../actions';

// using an = sign on the function argument defaults this argument to equal that value.
// very useful in ES6 development

// this lodash import does the following:
// takes a property of an object > creates a new object and assigns the property as that object's key.
/* 
const posts =[
  {id: 4, title: 'HI'},
  {id: 12, title: 'HIAAA'},
  {id: 25, title: 'HIOOO'}
];

posts = [{"id":4,"title":"HI"},{"id":12,"title":"HIAAA"},{"id":25,"title":"HIOOO"}]

_.mapKeys(posts,'id') = {"4":{"id":4,"title":"HI"},"12":{"id":12,"title":"HIAAA"},"25":{"id":25,"title":"HIOOO"}}

const state = _.mapKeys(posts,'id');

state["4"] = {"id":4,"title":"HI"}

VERY useful for transforming data
*/
import _ from 'lodash';

export default function(state = {}, action){
	switch(action.type){
    case FETCH_POSTS:
      console.log(action.payload.data);
      return _.mapKeys(action.payload.data, 'id');
		default: 
			return: state;
	}
}