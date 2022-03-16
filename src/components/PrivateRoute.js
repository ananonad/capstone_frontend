import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isUserLoggedIn, component: Component, reversed, ...rest }) => {
    const checkLogic = reversed ? !isUserLoggedIn : isUserLoggedIn

    return checkLogic ? <Component {...rest} /> : <Navigate to={reversed ? '/' : '/login'} />
}

export default PrivateRoute