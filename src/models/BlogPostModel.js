const url = 'http://localhost:4000/api/v1/wayfarer/blogs';

class BlogPostModel {
    static createPost(post) {
        return fetch(`${url}/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post)
            })
            .then((res) => res.json())
    }

    static deletePost(id) {
        return fetch(`${url}/${id}`, {
            method: 'DELETE'
        }).then((res) => res.json())
    }
}

export default BlogPostModel;