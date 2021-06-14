import React, { Component } from 'react';
import CityInfo from '../components/CityInfo';
import CreatePost from '../components/CreatePost';
import BlogPostModel from '../models/BlogPostModel';

class BlogPostContainer extends Component {
    state= {
        title: '',
        content: '',
        city: '', 
    }

    createBlogPost = (post) => {
        BlogPostModel.createPost(post)
    }

    render() {
        console.log('cityId in BlogPostContainer', this.props.cityId)
        return(
            <main>
                <CityInfo />
                <CreatePost cityId={this.props.cityId} createBlogPost={this.createBlogPost}/>
            </main>
        )
    }
}

export default BlogPostContainer;