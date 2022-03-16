import { Link, useParams} from "react-router-dom"
import { useState, useEffect } from "react"


function Showlist(props) {
    const params = useParams()
    const id = params.id
    const [list, setList] = useState(null);
const getLists = async () => {
    const response = await fetch(`${props.URL}/list/${id}`, {
        headers: {
            "Content-Type": "application/json",
            'Accept': "appilcatiion/json",
        },
        });
    const data = await response.json()
    console.log(data)
    setList(data)
}
useEffect(() => {
    getLists() 
}, [])

const loading = () => {
    return <h1>Loading...</h1>;
};


const loaded = () => {
return (

    <div className="showlist">
        <Link to={`/list/${id}/edit`}><h1>{list.name}</h1></Link>
        <img src={list.image} alt={list.name}/>
        <h2>{list.location}</h2>
        <h3>{list.description}</h3>
        
    </div>
)
}
return (
    <div>
    {list ? loaded() : loading()}
    </div>
)
}
export default Showlist;