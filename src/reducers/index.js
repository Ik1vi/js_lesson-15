const comments = (state = [], action) => {

    switch (action.type) {
        case 'ADD_COMMENT':
            return [
                ...state,
                {author: textName, text: textComment, datetime: datetime}
            ]
        case 'REMOVE_COMMENT':
            return [
                ...state,
                {index}
            ]
        default:
            return state;
    }
}

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