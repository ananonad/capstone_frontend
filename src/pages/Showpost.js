import {Link, useParams} from "react-router-dom"
import { useState, useEffect } from "react"


function Showpost(props) {
    const params = useParams()
    const id = params.id
    const [post, setPost] = useState(null);
const getPosts = async () => {
    const response = await fetch(`${props.URL}/post/${id}`, {
        headers: {
            "Content-Type": "application/json",
            'Accept': "appilcatiion/json",
        },
        });
    const data = await response.json()
    console.log(data)
    setPost(data)
}
useEffect(() => {getPosts() }, [])

const loading = () => {
    return <h1>Loading...</h1>;
};


const loaded = () => {
return (

    <div className="showpost">
        <Link to={`/post/${id}/edit`}><h1>{post.name}</h1></Link>
        <img src={post.image} alt={post.name}/>
        <h2>{post.location}</h2>
        <h3>{post.description}</h3>
        
    </div>
)
}
return (
    <div>
    {post ? loaded() : loading()}
    </div>
)
}
export default Showpost;