import Login from './Login.jsx';
import "./styles/Navbar.css";
import { useNavigate } from 'react-router-dom';

function Navbar(){

    const navigate = useNavigate();

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
                    Youtube
                </li>
                <li>
                   {/* if user has already loggedin show profile icon, details and signout*/}
                   <Login/>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar