import {Link} from "react-router-dom"


function Showpost(props) {
const getPosts = async () => {
    const response = await fetch(props.URL + '/showpost')
    const data = await response.json()
    getPosts(data)
}
}
export default Showpost;