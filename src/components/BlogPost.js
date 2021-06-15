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
            <div className="blog-box row">
                <div className="column blog-text">
                    <h4>{this.props.blogpost.title}</h4>
                    <p>{this.props.blogpost.content}</p>
                </div>
                <div className="column blog-buttons">
                    <label htmlFor="">Date: {relativeDate}</label>
                    <button>Edit</button>
                    <button onClick={this.deleteClickedPost}>Delete</button>
                </div>
                
            </div>
        )
    }
}

export default BlogPost;
