import React from 'react';
var moment = require('moment');

class BlogPost extends React.Component {
    deleteClickedPost = (event) => {
        this.props.deletePost(this.props.blogpost._id);
    }

    render() {
        let momentDate = moment(this.props.blogpost.createdAt);
        let relativeDate = momentDate.fromNow();
        return(
            <div id="postForm" class="row">
                <p>{this.props.blogpost.title}</p>
                <p>{this.props.blogpost.content}</p>
                <label htmlFor="">Date: {relativeDate}</label>
                <button>Edit</button>
                <button onClick={this.deleteClickedPost}>Delete</button>
            </div>
        )
    }

}

export default BlogPost;