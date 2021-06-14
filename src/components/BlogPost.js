import React from 'react';

function BlogPost(props) {
    return(
        <div id="postForm" class="row">
            <p>{props.blogpost.title}</p>
            <p>{props.blogpost.content}</p>
            <label htmlFor="">Date:</label>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default BlogPost;