import {Link, useParams} from "react-router-dom"
import { useState, useEffect } from "react"


function Editpost(props) {
//     const params = useParams()
//     const id = params.id
//     const [posts, setPost] = useState(null)
//     const [editForm, setEditForm] = useState({
//         name: "",
//         location: "",
//         image: "",
//         description: "",
//     });

//     const getPost = async () => {
//         const response = await fetch (`${props.URL}/post/${id}/edit`, {
//             headers:{
//                 "Content-Type": "application/json",
//                 'Accept': "application/json",
//             },
//         });
//         const data = await response.json()
//     setPost(data)
//     }
//     const handleChange = (event) => {
//         setEditForm({ ...editForm, [event.target.name]: event.target.value });
//     };
//     const editPost = async post => {
//         await fetch(URL, {
//             method: "put",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(post),
//         })
//         getPost()
//     }
//     useEffect(() => getPost(), [])
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         editPost(editForm);
//         setEditForm({
//             name: "",
//             location: "",
//             image: "",
//             description: "",
//         });
//     };

//     const loaded = () => {
//         return posts.map((post) => (
//             <div key={post._id} className="posts">
//                 <Link to={`/post/${post._id}`}><h1>{post.name}</h1></Link>
//                 <img src={post.image} alt={post.name} />
//                 <h3>{post.location}</h3>
//             </div>
//         ));
//     };
//     const loading = () => {
//         return <h1>Loading...</h1>;
//     };

//     return (
//     <section>
//     <form onSubmit={handleSubmit}>
//         <input
//             type="text"
//             value={editForm.name}
//             name="name"
//             placeholder="name"
//             onChange={handleChange}
//         />
//         <input
//             type="text"
//             value={editForm.image}
//             name="image"
//             placeholder="image URL"
//             onChange={handleChange}
//         />
//         <input
//             type="text"
//             value={editForm.location}
//             name="location"
//             placeholder="A cool title"
//             onChange={handleChange}
//         />
//         <input
//             type="text"
//             value={editForm.description}
//             name="description"
//             placeholder="A cool title"
//             onChange={handleChange}
//         />
//         <input type="submit" value="Edit Post" />
//     </form>
//     {posts ? loaded() : loading()}
// </section>
// );

    const id = props.match.params.id
    const posts = props.posts
    const post = post.find(p => p._id === id)

    const [editForm, setEditForm] = useState(post)

  // handleChange function for form
    const handleChange = event => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value })
    }

  const handleSubmit = event => {
    event.preventDefault()
    props.updatePosts(editForm)
    props.history.push("/")
  }

  const removePost = () => {
    props.deletePosts(post._id)
    props.history.push("/")
  }

  return (
    <div className="post">
      <h1>{post.name}</h1>
      <h2>{post.location}</h2>
      <h3>{post.description}</h3>
      <img src={post.image} alt={post.name} />
      <button id="delete" onClick={removePost}>
        DELETE
      </button>
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
        placeholder="description"
        onChange={handleChange}
      />

        <input type="submit" value="Update Post" />
      </form>
    </div>
  )




}

export default Editpost;