/**
 * Created by niksun on 15/11/3.
 */
import React from 'react';
import CommentListCell from './comment-list-cell';

export default class CommentList extends React.Component {
  render() {
    let commentNodes = [];
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
}

