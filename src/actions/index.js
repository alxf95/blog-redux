import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
const POST_CREATED = 'POST_CREATED';

export const fetchPosts = async () => {
  const promise = await axios.get(
    'https://reduxblog.herokuapp.com/api/posts/',
    {
      params: { key: 'alex' },
    }
  );

  return {
    type: FETCH_POSTS,
    payload: promise.data,
  };
};

export const fetchPost = async id => {
  const promise = await axios.get(
    `https://reduxblog.herokuapp.com/api/posts/${id}`,
    {
      params: {
        key: 'alex',
      },
    }
  );

  return {
    type: FETCH_POST,
    payload: promise.data,
  };
};

export const createPost = async (body, callback) => {
  const promise = await axios({
    method: 'post',
    url: 'https://reduxblog.herokuapp.com/api/posts?key=alex',
    data: body,
  }).then(callback);

  return {
    type: POST_CREATED,
    payload: promise.data,
  };
};
