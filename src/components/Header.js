import { Link } from "react-router-dom";

function Header(props) {

    const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "8px",
    width: "90%",
    margin: "auto",
    };

    return (
    <header>
        <nav style={navStyle}>
        <Link to="/">
            <div>VOYAGER</div>
        </Link>
        <Link to="/about">
            <div>ABOUT</div>
        </Link>
        <Link to="/list">
            <div>LISTINGS</div>
        </Link>
        <Link to="/post">
            <div>POSTS</div>
        </Link>
        </nav>
    </header>
    );
}

export default Header;