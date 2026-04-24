

function VideoDisplay(props){


    return(
        <>
        <div>
            <video src={props.video}></video>
            <h5>{props.channelName}</h5>
            <h5>{props.views}</h5>
            <h5>{props.date}</h5>
        </div>
        </>
    )
}