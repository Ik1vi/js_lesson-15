let nextComment = 0;

export const addComment = (textName, textComment, datetime) => {
    return {
        type: 'ADD_COMMENT',
        index: nextComment++,
        author: textName,
        text: textComment,
        datetime: datetime
    }
}

// const addComment = (textName, textComment, datetime) => {
//     const newComments = [...comments, { author: textName, text: textComment, datetime: datetime }];

//     setComments(newComments);
//     localStorage.setItem('comments', JSON.stringify(newComments));
// };

export const removeComment = (index) => {
    return {
        type: 'REMOVE_TODO',
        index
    }
}

// const removeComment = index => {
//     const newComments = [...comments];
//     newComments.splice(index, 1);

//     setComments(newComments);
//     localStorage.setItem('comments', JSON.stringify(newComments));
// };