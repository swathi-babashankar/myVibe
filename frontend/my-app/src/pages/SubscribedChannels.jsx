import './styles/subscribedChannels.css';
import { useEffect, useState } from 'react';
import Subscription from '../components/Subscriptions';
import { useSelector } from 'react-redux';


function SubscribedChannels(){

//install react-redux
//Create stores
//dispatch cred
//use it here 
const [subChannels, setSubChannels] = useState([]); 

useEffect(()=>{

   const token =  window.localStorage.getItem('accessToken');
   const subsApi = async() =>{

    try{

    //can add maxResults param to url, the default is only 5 items

    const favChannels = await fetch("https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true", {
        method: 'GET',
        
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json"
            }
    })

    const channelList = await favChannels.json();
    setSubChannels(channelList.items);

    console.log("list", channelList.items);
   
   }

   catch(err){
    console.log(err.message);
   } 
}

subsApi();

}, [])

console.log("subChsannel state",subChannels);
    return(
        <div className='scMainDiv'>
         {subChannels?.length !== 0 ? 
          <div className='subPageDiv'>
            {subChannels?.map((subChannel, i) =>(
                
                <Subscription {...subChannel} key={i}/>
                
            )
            )}
          </div>
         : <h3>You haven't Subscribed to any!</h3>
         }
        </div>
    )

}

export default SubscribedChannels;