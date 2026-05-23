import { useEffect, useState } from "react";

function Profile(){

    const [userName, setUserName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [contact, setContact] = useState(" ");

    useEffect(() =>{


    }, [])

    return(
        <div className="profileDiv">
            <input className="nameInput" value={}/>
            <input className="email" value={}/>
            <input className="phInput" value={} type='tel' />


        </div>
        
    )
}