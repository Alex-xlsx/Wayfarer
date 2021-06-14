import React, { Component } from 'react';
import CityInfo from '../components/CityInfo';
import AllCityCards from '../components/AllCityCards';
import CreatePost from '../components/CreatePost';
import BlogPostModel from '../models/BlogPostModel';
import CityModel from '../models/CityModel';
import BlogPosts from '../components/BlogPosts';
import { Redirect } from 'react-router';
class BlogPostContainer extends Component {
    state= {
        // title: '',
        // content: '',
        // city: '', 
        name: '',
        image: '',
        posts: [],
        cities: [],
        redirect: false,
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
        .then( () => {
            this.setState ({
                redirect: true
            })
        })
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to = {`/cities/${this.props.cityId}`}/>;
        }

        console.log('cityId in BlogPostContainer', this.props.cityId)
        return(
            <main>
                <CityInfo image={this.state.image}/>
                <AllCityCards cities={this.state.cities}/>
                <BlogPosts blogposts={this.state.posts}/>
                <CreatePost cityId={this.props.cityId} createBlogPost={this.createBlogPost}/>
            </main>
        )
    }
}

export default BlogPostContainer;