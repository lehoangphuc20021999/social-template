function loadPosts(){
    // function loadAllPosts(start, limit){
    //     //- FETCH ALL POSTS
    //     fetch('/posts', {
    //         method: 'POST',
    //         body: JSON.stringify({start, limit}),
    //         headers: { 
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(json => {
    //         if(json.postsList){
    //             let posts = ''
    //             for (let i = 0; i < json.postsList.length; i++) {
    //                 posts += '<div class="item">';
    //                 posts += json.postsList[i].post_title + " " + json.postsList[i].post_author + " " + json.postsList[i].post_description + "</br>";
    //                 posts += '</div>';
    //             }
    
    //             $('#post1').append(posts)
    
    //             if(json.postsList != ''){
    //                 $('.btn-load-more').addClass('btn-loading');
    //             }else{
    //                 $('.btn-load-more').removeClass('btn-loading');
    //                 $('.btn-load-more .btn-text').text('Không còn tin nào mới');
    //             }

    //         }else{
    //             json.postsList = ''
    //         }
    //     })
    //     .catch(err => {
    //         if(err){
    //             console.log(err)
    //         }
    //     })
    // }


    // $(document).ready(function(){
    //     if($('body').hasClass('home-page')){
    //         let start = 0;
    //         let limit = 3;
    //         let stop = false;
    
    //         if(loadAllPosts(start, limit) == ''){
    //             stop = true;
    //         }else{
    //             stop = false
    //         }
    
    //         // console.log("aaaaaa", stop);
    
    //         $(window).scroll(function(){
    //             let position = $(window).scrollTop() + $(window).height() - $("#posts").offset().top;
    //             let post1Height =  $("#posts").height();
    
    //             console.log(position , " ", post1Height);
    
    //             if(position >= post1Height  && stop == false)
    //             {
    //                 // action = 'active';
    //                 console.log('cc')
    //                 start += limit;
    
    //                 setTimeout(function(){
    //                     loadAllPosts(start, limit);
    //                 }, 3000);
    //             }
    
    //         });
    //         // console.log(action);
    //     }
    // })
}

export {loadPosts};