import {FETCH_POSTS, NEW_POST} from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res)
        .then(res => dispatch({
            type: FETCH_POSTS,
            payload: res.data
        }));
}

export const createPost = (postData) => dispatch =>{
    axios.post('https://jsonplaceholder.typicode.com/posts', postData, {

        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    }).then(res => res).then(res => dispatch({
        type: NEW_POST,
        payload: res.data
    })).catch(e => console.log(e));

}