import React from 'react';

import { CommentsList } from '../components/comments-list.js';
import { CommentForm } from '../components/comment-form.js';

import '../index.css';

export function App() {
    const [comments, setComments] = React.useState(
        JSON.parse(localStorage.comments || '[]')
    );

    const addComment = (textName, textComment, datetime) => {
        const newComments = [...comments, { author: textName, text: textComment, datetime: datetime }];

        setComments(newComments);
        localStorage.setItem('comments', JSON.stringify(newComments));
    };

    const removeComment = index => {
        const newComments = [...comments];
        newComments.splice(index, 1);

        setComments(newComments);
        localStorage.setItem('comments', JSON.stringify(newComments));
    };

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