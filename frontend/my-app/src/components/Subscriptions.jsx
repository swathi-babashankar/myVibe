import { useEffect, useState } from "react"


function Subscription({snippet}){

//API request to google to get the subscription list(inside useEffect)
//If it is necessary to give cred, then store the token in a reducer and call it here.
//In sub page, this comp will be called in a loop(map)
//https://www.googleapis.com/youtube/v3/subscriptions, {mine: true, }
const [subCount, setSubCount] = useState(0);

useEffect(() =>{
    const token =  window.localStorage.getItem('accessToken');

    const fetchSubscriber = async () =>{

        try{
             //can channelId be an array? if yes, then create another state var
            const channelID = snippet?.channelId;
            console.log("ch id", channelID);

            const subscriberCount = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelID}`, {
            method: 'GET',
        
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json"
            }

            })
            console.log("sub api result", subscriberCount);

            const result = await subscriberCount.json();
            setSubCount(result.items?.[0]?.statistics?.subscriberCount);

        }
        catch(err){
            console.log(err.message);

        }

    }

    fetchSubscriber();

}, [snippet?.channelId])

// console.log("sub comb items", items);


    return(
        <>
        {/* test */}
        <img src={snippet.thumbnails.default.url}/>
        <h5>{snippet.title}</h5>
        <h5>{subCount} subscribers</h5>
        </>
    )
}

//https://www.googleapis.com/youtube/v3/channels?part=statistics&id=channel_id&key=your_key : try this to get subscriber count
//go to channels in google apis, there are different params to be used to get sub count. view, likes etc

export default Subscription;