/**
 * Created by niksun on 15/11/3.
 */
var React = require('react');
var CommentListCell = require('./comment-list-cell');

var CommentList = React.createClass({
  displayName: 'CommentList',
  render: function() {
    var commentNodes = [];
    this.props.comments.map(function(comment, index) {
      commentNodes.push(
        <CommentListCell author={comment.author} key={index}>{comment.content}</CommentListCell>
      );
    });

    return (
      <div className="list">
        {commentNodes}
      </div>
    )
  }
});

module.exports = CommentList;