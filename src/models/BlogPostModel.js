const url = 'http://localhost:4000/api/v1/wayfarer/blogs/new';

class BlogPostModel {
    static createPost(post) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post)
            })
            .then((res) => res.json())
    }
}

export default BlogPostModel;