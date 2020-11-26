import React from 'react';
import {Comment} from '../components/comment.js';

export function CommentsList(props) {
    return (
        <ul className="app__comments-list">
            {props.comments.length
                ? props.comments.map((comment, index) => (
                    <Comment
                        key={index}
                        index={index}
                        comment={comment}
                        removeComment={props.removeComment}
                    />
                ))
                : <p
                    className="app__p-no-comments"
                >Новых комментариев нет</p>
            }
        </ul>
    )
}