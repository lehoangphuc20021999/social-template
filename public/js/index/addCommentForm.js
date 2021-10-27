// import {loadComments} from './loadComments'

function addCommentForm(){
    // $(document).ready(function(){   
    //     //- Add comment form
    //     const form = document.querySelector('#post-comment-form');
    //     if(form){
    //         form.addEventListener('submit', async (e) =>{
    //             e.preventDefault();
    //             let username = $('#username').val();
    //             let comment = $('#commentSection').val();

    //             console.log(username, commentSection);

    //             //- INSERT A COMMENT
    //             fetch('/comments/insert', {
    //                 method: 'POST',
    //                 body: JSON.stringify({username, comment}),
    //                 headers: { 
    //                     'Content-Type': 'application/json',
    //                     'Accept': 'application/json'
    //                 }
    //             })
    //             .then(response => response.json())
    //             .then(json => {
    //                 loadComments();
    //             })  
    //             .catch(err => {
    //                 if(err){
    //                     console.log(err)
    //                 }
    //             })
    //         })
    //     }
    // })
}

export {addCommentForm};