import { useEffect } from "react"


function Subscription({props}){

//API request to google to get the subscription list(inside useEffect)
//If it is necessary to give cred, then store the token in a reducer and call it here.
//In sub page, this comp will be called in a loop(map)
//https://www.googleapis.com/youtube/v3/subscriptions, {mine: true, }

useEffect(()=>{

   const token =  window.localStorage.getItem('accessToken');
    const subsApi = async() =>{
//can add maxResults param to url, the default is only 5 items
    const favChannels = await fetch("https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true", {
        method: 'GET',
        
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json"
            }
    })

    const channelList = await favChannels.json()
    console.log("list", channelList);
    
}

subsApi();



}, [])


    return(
        <>
        {/* <img src={props.url}/>
        <h5>{props.channelName}</h5>
        <ul>
        <li>{props.subCount} </li>
        <li>{props.videoCount}</li>
        </ul> */}
        </>
    )
}

export default Subscription;