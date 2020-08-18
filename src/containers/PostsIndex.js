import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class PostsIndex extends Component {
  renderPosts() {
    return this.props.posts.map(post => {
      return (
        <Link to={`/posts/${post.id}`} key={post.id}>
          <div className="post-item">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="first-row">
          <h3>Blog</h3>
          <Link className="btn btn-primary btn-cta" to="/posts/new">
            Let's write a post!
          </Link>
        </div>
        {this.renderPosts()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(PostsIndex);
