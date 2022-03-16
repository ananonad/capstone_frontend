import {  useParams, useNavigate} from "react-router-dom"
import { useState, useEffect } from "react"

function Editlist(props) {
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id
    const [list, setList] = useState(null)
    const [editForm, setEditForm] = useState(list)

  

    const getList = async () => {
        const response = await fetch (`${props.URL}/list/${id}`, {
            headers:{
                "Content-Type": "application/json",
                'Accept': "application/json",
            },
        });
        const data = await response.json()
        setEditForm(data)
        setList(data)
    }
    
    const handleChange = (event) => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value });
    };
    
    const editList = async post => {
        await fetch(`${props.URL}/list/${id}`, {
        method: "put",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
        })
        getList()
    }
    
    useEffect(() => getList(), [])
    
    const handleSubmit = (event) => {
        event.preventDefault();
        editList(editForm);
        setEditForm({
            name: "",
            location: "",
            image: "",
            description: "",
            });
            navigate('/list')
    };
    
    const  deleteList = async post  => {
        await fetch(`${props.URL}/list/${id}`, {
        method: "delete",
    })
    navigate('/list')
}

    const loaded = () => {
        return  (
            <div className="list">
                <h1>{list.name}</h1>
                <h2>{list.location}</h2>
                <h3>{list.description}</h3>
                <img src={list.image} alt={list.name} />
                <button id="delete" onClick={deleteList}>DELETE</button>
              
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
            <input type="submit" value="Edit Listing" />
    </form>
            </div>
        );
    };
    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return list ? loaded() : loading()

    }


export default Editlist;