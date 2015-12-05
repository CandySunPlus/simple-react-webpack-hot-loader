/**
 * Created by niksun on 15/11/3.
 */

import React from 'react';

export default class CommentForm extends React.Component {
  submitHandler(e) {
    e.preventDefault();
    var author = this.refs.author.value.trim();
    var content = this.refs.content.value.trim();
    if (!author || !content) {
      alert('please input author and content');
      return;
    }

    this.refs.author.value = '';
    this.refs.content.value = '';

    //noinspection JSUnresolvedFunction
    this.props.onCommentSubmit(author, content);
  }
  render() {
    return (
      <div className="form">
        <form onSubmit={(e) => this.submitHandler(e)} className="pure-form">
          <fieldset className="pure-group">
            <input type="text" placeholder="Your name" className="pure-input-1-2" ref="author" />
            <textarea name="" placeholder="Say something..." className="pure-input-1-2" ref="content" />
          </fieldset>
          <button type="submit" className="pure-button pure-input-1-2 pure-button-primary">提交</button>
        </form>
      </div>
    );
  }
}
