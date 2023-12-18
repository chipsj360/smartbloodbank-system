import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useToken () {
  const navigate = useNavigate();
    const getToken =() =>{
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
      }
    
    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
      };

      const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
       navigate("/login")
      };

      return {
        setToken: saveToken,
        token,
        logout
      }

}
 
export default useToken;