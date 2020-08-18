import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import postsReducer from './reducers/postsReducer';
import PostsIndex from './containers/PostsIndex';
import './application.css';

const reducers = combineReducers({
  posts: postsReducer,
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <BrowserRouter>
      <Switch>
        <div className="ui container">
          <Switch>
            <Route path="/" exact component={PostsIndex} />
          </Switch>
        </div>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
