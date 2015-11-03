var React = require('react');
var CommentBox = require('./comment-box');

var App = React.createClass({
  render: function() {
    return (
      <CommentBox />
    );
  }
});

module.exports = App;
