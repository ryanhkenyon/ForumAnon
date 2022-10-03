const addCommentButton = document.getElementById('addComment');
const commentInput = document.getElementById('commentInput').value;
const commentInputField = document.getElementById('commentInputField');
const submitCommentButton = document.getElementById('submitComment');

addCommentButton.addEventListener('click',()=>{
    addCommentButton.style.display = 'none';
    commentInputField.style.display = 'block';
});

submitCommentButton.addEventListener('click',()=>{
    addCommentButton.style.display = 'block';
    commentInputField.style.display = 'none';
});