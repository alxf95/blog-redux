import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { reducer as formReducer } from 'redux-form';
import logger from 'redux-logger';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PostsIndex from './containers/PostsIndex';
import PostsNew from './containers/PostsNew';
import PostsShow from './containers/PostsShow';

import postsReducer from './reducers/postsReducer';
import './application.css';

const reducers = combineReducers({
  posts: postsReducer,
  form: formReducer,
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <BrowserRouter>
      <div className="ui container">
        <Switch>
          <Route path="/" exact component={PostsIndex} />
          <Route path="/posts/new" exact component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
