import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

function Post(props) {
    // state to hold formData
    const [posts, setPosts] = useState(null)
    const [newForm, setNewForm] = useState({
        name: "",
        location: "",
        image: "",
        description: "",
    });

    // handleChange function for form
    const handleChange = (event) => {
        console.log(event.target);
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    const getPosts = async () => {
        const response = await fetch(props.URL + '/post')
        const data = await response.json()
        console.log(data)
        setPosts(data)
    }

    const createPosts = async post=> {
        await fetch(props.URL + '/post', {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        })
        getPosts()
    }
    useEffect(() => getPosts(), [])
    const handleSubmit = (event) => {
        event.preventDefault();
        createPosts(newForm);
        setNewForm({
            name: "",
            location: "",
            image: "",
            description: "",
        });
    };

    const loaded = () => {
        return posts.map((posts) => (
            <div key={posts._id} className="posts">
                <Link to={`/post/${posts._id}`}><h1>{posts.name}</h1></Link>
                <img src={posts.image} alt={posts.name} />
                <h3>{posts.location}</h3>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.location}
                    name="location"
                    placeholder="Location"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.description}
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                />
                <input type="submit" value="Create Posts" />
            </form>
            {posts ? loaded() : loading()}
        </section>
    );
}

export default Post;