import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Comment } from './comment.js';
import { CommentForm } from './comment-form.js';


function App() {
    const getCurrentDatetime = () => {
        return new Date().toLocaleString();
    }

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
            <ul className="app__comments-list">
                {comments.length 
                    ? comments.map((comment, index) => (
                        <Comment
                            key={index}
                            index={index}
                            comment={comment}
                            removeComment={removeComment}
                        />
                    ))
                    : <p
                        className="app__p-no-comments"
                    >Новых комментариев нет</p>
                }
            </ul>
            <CommentForm
                addComment={addComment}
                getCurrentDatetime={getCurrentDatetime} />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('.body')
);

export default App;