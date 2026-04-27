import { useEffect } from "react";
import {jwtDecode } from 'jwt-decode'

function Login(){

    useEffect(() => {
    if (!window.google) return;

   const client =  window.google.accounts.oauth2.initTokenClient({
      client_id: "997255180107-0rqj02e84b9qpftnc2psg3cl8r0na44e.apps.googleusercontent.com",
      scope: "https://www.googleapis.com/auth/youtube.readonly",
      callback: handleLogin,
    });

   document.getElementById("googleBtn").onclick = () => {
    client.requestAccessToken();
  };
  }, []);

  const handleLogin = async (response) =>  {
    console.log("JWT token:", response.access_token);
    window.localStorage.setItem('accessToken', response.access_token);
    
  };
  
    return(    
      <button id="googleBtn">Sign in with Google</button>
    )
}

export default Login


