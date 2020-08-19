import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount = () => {
    if (!this.props.post) {
      this.props.fetchPost(this.props.match.params.id);
    }
  };

  render() {
    if (!this.props.post) {
      return <p>Loading...</p>;
    }

    const { title, content } = this.props.post;

    return (
      <div>
        <div className="post-item">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
        <Link to="/">Back</Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const post = state.posts.find(post => post.id === idFromUrl);
  return { post };
};

export default connect(mapStateToProps, { fetchPost })(PostsShow);
