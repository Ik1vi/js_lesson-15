import React from 'react';

export function Comment(props) {
    return (
        <li className="app__comment comment">
            <header className="comment__header">
                <h2 className="comment__author">
                   {props.comment.author}
                </h2>

                <button
                    className="comment__remove-btn remove-btn"
                    onClick={() => props.removeComment(props.index)}>x
                </button>
            </header>

            <p className="comment__text">
                {props.comment.text}
            </p>

            <time className="comment__datetime">
                {props.comment.datetime}
            </time>
        </li>
    );
};