/**
 * Created by niksun on 15/11/3.
 */

import React from 'react';
import CommentForm from './comment-form';
import CommentList from './comment-list';

let comments = [
  {
    author: 'NikSun',
    content: '这是第一条评论'
  },
  {
    author: 'CandySunPlus',
    content: '这是另一条评论'
  }
];

export default class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }
  componentDidMount() {
    this.setState({
      comments: comments
    });
  }
  addComment(author, content) {
    comments.push({
      author: author,
      content: content
    });

    this.setState({
      comments: comments
    });
  }
  render() {
    return (
      <div className="comment-box">
        <CommentForm onCommentSubmit={this.addComment.bind(this)}/>
        <CommentList comments={this.state.comments}/>
      </div>
    );
  }
}
