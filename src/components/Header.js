import { Link } from "react-router-dom";

function Header({ isUserLoggedIn, setIsUserLoggedIn, logoutUser }) {
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
                {isUserLoggedIn && (
                    <Link to="/list">
                        <div>LISTINGS</div>
                    </Link>
                )}
                {isUserLoggedIn && (
                    <Link to="/post">
                        <div>POSTS</div>
                    </Link>
                )}
                {!isUserLoggedIn && (
                    <Link to="/register">
                        <div>REGISTER</div>
                    </Link> 
                )}
                {!isUserLoggedIn && (
                    <Link to="/login">
                        <div>LOGIN</div>
                    </Link>
                )}
                {isUserLoggedIn && (
                    <Link to="/" onClick={() => logoutUser(setIsUserLoggedIn)}>
                        <div>LOGOUT</div>
                    </Link>
                )}
            </nav>
        </header>
    );
}

export default Header;