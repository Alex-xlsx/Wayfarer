import React from 'react';
import BlogPost from './BlogPost';
class BlogPosts extends React.Component {

  render() {
    let blogposts = this.props.blogposts.map((blogpost) => {
      return <BlogPost 
        key={blogpost._id}
        blogpost={blogpost}
        // onDeleteBlogPost={this.props.onDeleteBlogPost}
        // onUpdateBlogPost={this.props.onUpdateBlogPost}
      />
    
    })
    
    return ( 
    <ul>
      {blogposts}
    </ul>
    )
  }
}
  
 export default BlogPosts;