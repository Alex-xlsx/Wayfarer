import React, { Component } from 'react';
import CityInfo from '../components/CityInfo';
import AllCityCards from '../components/AllCityCards';
import CreatePost from '../components/CreatePost';
import BlogPostModel from '../models/BlogPostModel';
import CityModel from '../models/CityModel';
import BlogPosts from '../components/BlogPosts';
class BlogPostContainer extends Component {
    state= {
        name: '',
        image: '',
        posts: [],
        cities: []
    }

    componentDidMount() {
        this.fetchCurrentCity();
        this.fetchCities();
    }

    fetchCities = () => {
        CityModel.all().then((res) => {
            console.log("Response from cities api: ", res);
            this.setState({
                cities: res,
            })
        })
    }

    fetchCurrentCity = () => {
        CityModel.getCity(this.props.cityId).then((res) => {
            console.log("Response from getCity api: ", res);
            this.setState({
                image: res.image,
                name: res.name,
                posts: res.posts,
            })
        })
    }

    createBlogPost = async (post) => {
        let newPost = await BlogPostModel.createPost(post);
        let currentPosts = this.state.posts;
        currentPosts.push(newPost);
        this.setState({
            posts: currentPosts,
        });
    }

    deletePost = async (id) => {
        let deletedPost = await BlogPostModel.deletePost(id);
        console.log("Response from deletedPost api: ", deletedPost);
        let updatedPosts = this.state.posts.filter((post) => {
            return post._id !== deletedPost._id;
        });
        this.setState({
            posts: updatedPosts
        })
    }

    render() {
        console.log('cityId in BlogPostContainer', this.props.cityId)
        return(
            <main>
                <CityInfo image={this.state.image}/>
                <AllCityCards cities={this.state.cities}/>
                <BlogPosts blogposts={this.state.posts} deletePost={this.deletePost}/>
                <CreatePost cityId={this.props.cityId} createBlogPost={this.createBlogPost}/>
            </main>
        )
    }
}

export default BlogPostContainer;