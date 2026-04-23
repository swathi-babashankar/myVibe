import Login from './Login.jsx'

function Navbar(){

    return(
        <>
        <nav >
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