import React, { Component } from 'react';
import CityInfo from '../components/CityInfo';
import CreatePost from '../components/CreatePost';
import BlogPostModel from '../models/BlogPostModel';
import CityModel from '../models/CityModel';

class BlogPostContainer extends Component {
    state= {
        title: '',
        content: '',
        city: '', 
        name: '',
        image: '',
        posts: [],
        cities: [],
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

    createBlogPost = (post) => {
        return BlogPostModel.createPost(post)
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