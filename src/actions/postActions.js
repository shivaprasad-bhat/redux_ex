import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => (dispatch) => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then((res) => res.json())
        .then((posts) =>
            dispatch({
                type: FETCH_POSTS,
                payload: posts,
            })
        );
};

export const createPost = (postData) => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'post',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(postData),
    })
        .then((res) => res.json())
        .then((post) =>
            dispatch({
                type: NEW_POST,
                payload: post,
            })
        );
};
