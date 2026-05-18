import { useEffect } from 'react';
import Login from './Login.jsx';
import "./styles/Navbar.css";
import { useNavigate } from 'react-router-dom';

function Navbar(){

    const navigate = useNavigate();
    const token = window.localStorage.getItem("accessToken")

 useEffect(() =>{

    const handleAutoLogout = () =>{
    
    
    let expiryTime = Number(window.localStorage.getItem("expires_in"));
    console.log(expiryTime);
     
    let curr_date = Math.floor(Date.now() / 1000);

    if(curr_date > expiryTime)
      {
      window.localStorage.removeItem("accessToken");
      window.localStorage.removeItem("expires_in")

    //   location.reload();
      console.log(expiryTime);
      }
  }

  handleAutoLogout();

 },[])
    

    return(
        <>
        <nav className='navbar'>
            <ul>
                <li role="button" onClick={() => navigate('/subscriptions')}>
                    Subscriptions
                </li>
                <li>
                    About App
                </li>
                <li>
                <a href='https://www.youtube.com/' className='youLink'>
                    Youtube
                    </a>
                </li>
                <li>
                   {/* if user has already loggedin show profile icon, details and signout*/}
                   {token ? <button type='button' className='profile'>Profile</button> : <Login/>}
                   
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar