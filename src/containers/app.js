import React from 'react';

import { connect } from 'react-redux';
import { addComment, removeComment } from '../actions/index.js';

import { CommentsList } from '../components/comments-list.js';
import { CommentForm } from '../components/comment-form.js';

import '../index.css';

export function App(props) {

    const {
        comments, addComment, removeComment
    } = props;

    const mapStateToProps = (state) => {
        return {
            todos: state
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            addComment: (textName, textComment, datetime) => dispatch(addComment(textName, textComment, datetime)),
            removeComment: (index) => dispatch(removeComment(index))
        }
    }

    App = connect(
        mapStateToProps,
        mapDispatchToProps
    )(App);

    // const addComment = (textName, textComment, datetime) => {
    //     const newComments = [...comments, { author: textName, text: textComment, datetime: datetime }];

    //     setComments(newComments);
    //     localStorage.setItem('comments', JSON.stringify(newComments));
    // };

    // const removeComment = index => {
    //     const newComments = [...comments];
    //     newComments.splice(index, 1);

    //     setComments(newComments);
    //     localStorage.setItem('comments', JSON.stringify(newComments));
    // };

    return (
        <div className="body__app app">
            <CommentsList
                removeComment={removeComment}
                comments={comments}
            />
            <CommentForm
                addComment={addComment} />
        </div>
    );
}