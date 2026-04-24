import Login from './Login.jsx';
import "./styles/Navbar.css"

function Navbar(){

    return(
        <>
        <nav className='navbar'>
            <ul>
                <li>
                    Subscriptions
                </li>
                <li>
                    About App
                </li>
                <li>
                    Youtube
                </li>
                <li>
                   {/* */}
                   <Login/>
                </li>
            </ul>
        </nav>
        {/* <div className="g-signin2" data-onsuccess="onSignIn"></div>  */}
        </>
    )
}

export default Navbar