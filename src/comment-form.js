import React from 'react';

export function CommentForm(props) {
    const [textComment, setTextComment] = React.useState("");

    const [textName, setTextName] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();

        if (!textComment || !textName) {
            alert('Дополните данные');
            return;
        }
        props.addComment(textName, textComment, props.getCurrentDatetime() );
        setTextComment("");
        setTextName("");
    };

    return (
        <form
            className="new-comment-form"
            onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Ваше имя"
                className="new-comment-form__input"
                value={textName}
                onChange={e => setTextName(e.target.value)}>
            </input>

            <input
                type="text"
                placeholder="Ваш комментарий"
                className="new-comment-form__input new-comment-form__input--comment"
                value={textComment}
                onChange={e => setTextComment(e.target.value)}>
            </input>

            <button 
                type="submit"
                className="new-comment-form__btn">Отправить</button>
        </form>
    );
}