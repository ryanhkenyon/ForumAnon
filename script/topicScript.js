const createPostButton = document.getElementById('createPost');
const threadNameInput = document.getElementById('threadNameInput').value;
const threadPostInput = document.getElementById('threadPostInput').value;
const threadInputField = document.getElementById('threadInputField');
const submitThreadButton = document.getElementById('submitThread');

createPostButton.addEventListener('click',()=>{
    createPostButton.style.display = 'none';
    threadInputField.style.display = 'block';
});

submitThreadButton.addEventListener('click',()=>{
    createPostButton.style.display = 'block';
    threadInputField.style.display = 'none';
});
