import { useEffect } from "react"


function Subscription(items){

//API request to google to get the subscription list(inside useEffect)
//If it is necessary to give cred, then store the token in a reducer and call it here.
//In sub page, this comp will be called in a loop(map)
//https://www.googleapis.com/youtube/v3/subscriptions, {mine: true, }

console.log("sub comb iteems", items);


    return(
        <>
        <img src={items.snippet.thumbnails.default.url}/>
        <h5>{items.snippet.title}</h5>
        {/* <ul> */}
        {/* <li>{item.snippet.default.url} </li>
        <li>{item.videoCount}</li> */}
        {/* </ul>  */}
        </>
    )
}

//https://www.googleapis.com/youtube/v3/channels?part=statistics&id=channel_id&key=your_key : try this to get subscriber count
//go to channels in google apis, there are different params to be used to get sub count. view, likes etc

export default Subscription;