import React, {Component} from 'react'
class CreatePost extends Component {
    //sets the initial state via the constructor! that's the constructor's job :)
    state = {
      title: '',
      content: '',
      city: this.props.cityId
    }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    let blogPost = this.state;
    console.log('cityId in CreatePost', this.props.cityId)
    console.log('blogPost in CreatePost', blogPost)

    this.props.createBlogPost(blogPost)
    this.setState({
      title: '',
      content: '',
    })
  }

  render(){
    return (
        <form onSubmit={ this.onFormSubmit } id="postForm">
          <input onChange={this.onInputChange}
            type="text"
            value={this.state.title}
            name="title"
          />
          <textarea  
            onChange={ this.onInputChange } 
            type="text" id="blogContent" 
            placeholder="Make a blog post..." 
            value={this.state.content}
            name="content"
            rows="10" cols="80"
          ></textarea>
          <button type="submit" id="addPost" className="btn">Add Post</button>
        </form>
    )
  }
}

export default CreatePost;