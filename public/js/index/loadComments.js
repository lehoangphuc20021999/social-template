function loadComments(){
    // $(document).ready(function(){
    //     //- FETCH ALL COMMENTS
    //     fetch('/comments', {
    //         method: 'GET',
    //     })
    //     .then(response => response.json())
    //     .then(json => {
    //         let comments = ''
    //         for (let i = 0; i < json.commentsList.length; i++) {
    //             comments += json.commentsList[i].username + ": " + json.commentsList[i].comment + "</br>"
    //         }
    //         $('#demo').html(comments)
    //     })
    //     .catch(err => {
    //         if(err){
    //             console.log(err)
    //         }
    //     })
    // })
}

export {loadComments};