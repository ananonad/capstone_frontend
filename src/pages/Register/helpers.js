import axios from "axios";

const registerUser = (userData, errorSetter, navigate) => {
    axios
    .post("/user/register", userData)
    .then(res => {
        errorSetter(false)
        navigate("/login");
      })
    .catch(error => {
        errorSetter(error.response.data)
    })
}


const helpersObj = { registerUser }

export default helpersObj