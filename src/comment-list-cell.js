/**
 * Created by niksun on 15/11/3.
 */
var React = require('react');

var CommentListCell = React.createClass({
  displayName: 'CommentListCell',
  render: function() {
    return (
      <div className="cell">
        <h3 className="author">{this.props.author}</h3>
        <span className="content">{this.props.children.toString()}</span>
      </div>
    );
  }
});

module.exports = CommentListCell;