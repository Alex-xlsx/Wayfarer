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
                    <div className="row blog-title">
                        <h4>{this.props.blogpost.title}</h4>
                        <label className="date-text" htmlFor="">Date: {relativeDate}</label>
                    </div>
                    <p>{this.props.blogpost.content}</p>
                </div>
                <div className="column blog-buttons">
                    <button>Edit</button>
                    <button onClick={this.deleteClickedPost}>Delete</button>
                </div>
                
            </div>
        )
    }
}

export default BlogPost;
