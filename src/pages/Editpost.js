import { Link, useParams, useNavigate} from "react-router-dom"
import { useState, useEffect } from "react"

function Editpost(props) {
  const navigate = useNavigate()
    const params = useParams()
    const id = params.id
    const [post, setPost] = useState(null)
    const [editForm, setEditForm] = useState(post)

  

    const getPost = async () => {
        const response = await fetch (`${props.URL}/post/${id}`, {
            headers:{
                "Content-Type": "application/json",
                'Accept': "application/json",
            },
        });
        const data = await response.json()
        setEditForm(data)
    setPost(data)
    }
    
    const handleChange = (event) => {
      setEditForm({ ...editForm, [event.target.name]: event.target.value });
    };
    
    const editPost = async post => {
      await fetch(`${props.URL}/post/${id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      })
      getPost()
    }
    
    useEffect(() => getPost(), [])
    
    const handleSubmit = (event) => {
        event.preventDefault();
        editPost(editForm);
        setEditForm({
            name: "",
            location: "",
            image: "",
            description: "",
          });
          navigate('/post')
    };
    
    const removePost = () => {
    post.deletePost(post._id)
    post.history.push('/')
  }

    const loaded = () => {
        return  (
            <div className="post">
              <h1>{post.name}</h1>
              <h2>{post.location}</h2>
              <h3>{post.description}</h3>
              <img src={post.image} alt={post.name} />
              <button id="delete" onClick={removePost}>DELETE</button>
              
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={editForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
        />
        <input
            type="text"
            value={editForm.image}
            name="image"
            placeholder="image URL"
            onChange={handleChange}
        />
        <input
            type="text"
            value={editForm.location}
            name="location"
            placeholder="location"
            onChange={handleChange}
        />
        <input
            type="text"
            value={editForm.description}
            name="description"
            placeholder="Description"
            onChange={handleChange}
        />
        <Link to='/post'> <input type="submit" value="Edit Post" /> </Link>
    </form>
            </div>
        );
    };
    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return post ? loaded() : loading()

    }


export default Editpost;