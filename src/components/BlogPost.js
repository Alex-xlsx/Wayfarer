import React from 'react';

function BlogPost(props) {
    return(
        <div className="blog-box row">
            <div className="column blog-text">
                <h4>{props.blogpost.title}</h4>
                <p>{props.blogpost.content}</p>
            </div>
            <div className="column blog-buttons">
                <label htmlFor="">Date:</label>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default BlogPost;
