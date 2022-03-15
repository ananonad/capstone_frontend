import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

function List(props) {
    // state to hold formData
    const [lists, setLists] = useState(null)
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

    const getLists = async () => {
        const response = await fetch(props.URL + '/list')
        const data = await response.json()
        setLists(data)
    };

    const createLists = async list => {
        await fetch(props.URL + '/list', {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(list),
        })
        
        getLists()
    }

    useEffect(() => getLists(), [])
    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        createLists(newForm);
        setNewForm({
            name: "",
            location: "",
            image: "",
            description: "",
        });
    };

    // loaded function
    const loaded = () => {
        return lists.map((lists) => (
            <div key={lists._id} className="lists">
                <Link to={`/list/${lists._id}`}><h1>{lists.name}</h1></Link>
                <h3>{lists.location}</h3>
                <h3>{lists.description}</h3>
                <img src={lists.image} alt={lists.name} />
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
                <input type="submit" value="Create Listing" />
            </form>
            {lists ? loaded() : loading()}
        </section>
    );
}



export default List;