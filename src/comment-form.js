/**
 * Created by niksun on 15/11/3.
 */

var React = require('react');

var CommentForm = React.createClass({
  displayName: 'CommentForm',
  submitHandler: function(e) {
    e.preventDefault();
    var author = this.refs.author.value.trim();
    var content = this.refs.content.value.trim();
    if (!author || !content) {
      alert('please input author and content');
      return;
    }

    this.refs.author.value = '';
    this.refs.content.value = '';

    this.props.onCommentSubmit(author, content);
  },
  render: function() {
    return (
      <div className="form">
        <form onSubmit={this.submitHandler}>
          <input type="text" placeholder="Your name" ref="author"/>
          <textarea name="" placeholder="Say something..." ref="content"></textarea>
          <button type="submit">提交</button>
        </form>
      </div>
    );
  }
});

module.exports = CommentForm;
