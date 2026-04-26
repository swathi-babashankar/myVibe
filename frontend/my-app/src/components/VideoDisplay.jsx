import './styles/videoDisplay.css';

function VideoDisplay(props){


    return(
        <>
        <div className="mainDiv">
        <div className="vdiv">
           <iframe className="videoFr" width="311" height="255" src="https://www.youtube.com/embed/Csr2iU8O_rw" title="Control AI suggestions in VSCode" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           <h5>Control AI suggestions</h5>
           <span><h5>Chai aur Code</h5>
           <ul className='channelDet'>
            <li>500k views</li>
            <li>1 month ago</li></ul></span>
        </div>
        </div>
        </>
        
    )
}

export default VideoDisplay;
