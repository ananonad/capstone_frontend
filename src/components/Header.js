import { Link } from "react-router-dom";

function Header(props) {

    const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
    };

    return (
    <header>
        <nav style={navStyle}>
        <Link to="/">
            <div>HOME</div>
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
        <Link to="/login">
            <div>LOGIN</div>
        </Link>
        <Link to="/register">
            <div>REGISTER</div>
        </Link>
        </nav>
    </header>
    );
}

export default Header;