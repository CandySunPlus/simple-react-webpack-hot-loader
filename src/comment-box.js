/**
 * Created by niksun on 15/11/3.
 */
var React = require('react');
var CommentForm = require('./comment-form');
var CommentList = require('./comment-list');

var comments = [
  {
    author: 'NikSun',
    content: '这是第一条评论'
  },
  {
    author: 'CandySunPlus',
    content: '这是另一条评论'
  }
];
var CommentBox = React.createClass({
  displayName: 'CommentBox',
  getInitialState: function() {
    return {
      comments: []
    };
  },
  componentDidMount: function() {
    this.setState({
      comments: comments
    });
  },
  addComment: function(author, content) {
    comments.push({
      author: author,
      content: content
    });

    this.setState({
      comments: comments
    });
  },
  render: function() {
    return (
      <div className="comment-box">
        <CommentForm onCommentSubmit={this.addComment} />
        <CommentList comments={this.state.comments} />
      </div>
    )
  }
});

module.exports = CommentBox;