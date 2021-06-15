import React from 'react';
var moment = require('moment');

class BlogPost extends React.Component {
    state = {
        isEditClicked: false,
        title: '',
        content: '',
    }

    deleteClickedPost = (event) => {
        this.props.deletePost(this.props.blogpost._id);
    }

    handleClick = (event) => {
        this.setState({
            isEditClicked: true
        })
        console.log('Update BlogPostContainer state');
    }

    // handleCancelClick = (event) => {
    //     this.setState({
    //         isEditClicked: false
    //     })
    // }

    // handleEditPost = () => {

    // }

    // onInputChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    render() {
        let momentDate = moment(this.props.blogpost.createdAt);
        let relativeDate = momentDate.fromNow();

        // if(this.state.isEditClicked) {
        //     return (
        //         <>
        //             <form>
        //                 <input type="text" value={this.props.blogpost.title} name="title"/>
        //                 <textarea  
        //                     onChange={ this.onInputChange } 
        //                     type="text" id="blogContent" 
        //                     value={this.props.blogpost.content}
        //                     name="content"
        //                 ></textarea>
        //             </form>
        //             <div className="column blog-buttons">
        //                 <label htmlFor="">Date: {relativeDate}</label>
        //                 <button onClick={this.handleCancelClick}>Cancel</button>
        //                 <button onClick={this.handleEditPost}>Submit</button>
        //             </div>
        //         </>
        //     )
        // }
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
                    <label htmlFor="">Date: {relativeDate}</label>
                    <button onClick={this.handleClick}>Edit</button>
                    <button onClick={this.deleteClickedPost}>Delete</button>
                </div>
                
            </div>
        )
    }
}

export default BlogPost;
