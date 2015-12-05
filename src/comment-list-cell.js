/**
 * Created by niksun on 15/11/3.
 */
import React from 'react';

export default class CommentListCell extends React.Component {
  render() {
    return (
      <div className="cell">
        <h3 className="author">{this.props.author}</h3>
        <span className="content">{this.props.children.toString()}</span>
      </div>
    );
  }
}

module.exports = CommentListCell;