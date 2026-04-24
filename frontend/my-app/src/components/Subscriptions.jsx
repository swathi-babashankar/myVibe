

function Subscription({props}){

//API request to google to get the subscription list(inside useEffect)
//If it is necessary to give cred, then store the token in a reducer and call it here.
//In sub page, this comp will be called in a loop(map)
    return(
        <>
        <img src={props.url}/>
        <h5>{props.channelName}</h5>
        <ul>
        <li>{props.subCount} </li>
        <li>{props.videoCount}</li>
        </ul>
        </>
    )
}