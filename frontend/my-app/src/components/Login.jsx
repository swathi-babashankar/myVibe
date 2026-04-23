import { useEffect } from "react";
import {jwtDecode } from 'jwt-decode'

function Login(){

    useEffect(() => {
    if (!window.google) return;

    window.google.accounts.id.initialize({
      client_id: "997255180107-0rqj02e84b9qpftnc2psg3cl8r0na44e.apps.googleusercontent.com",
      callback: handleLogin,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("googleBtn"),
      {
        theme: "outline",
        size: "large",
        
      }
    );
  }, []);

  const handleLogin = async (response) =>  {
    console.log("JWT token:", jwtDecode(response.credential));

    
  };
  
    return(    
       <div id="googleBtn"></div>
    )
}

export default Login


