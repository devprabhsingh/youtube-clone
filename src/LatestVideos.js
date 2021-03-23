import React from 'react'
import './latestVideos.css'
import VideoCard from './VideoCard'

class LatestVideos extends React.Component{
    // const [lVideos,setlVideos] = useState([]);
    constructor(props){
        super(props)
        this.state = {
            lVideos:[]
        }
    }
    
   

    async componentDidMount(){
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=AIzaSyB4qtRCkYTup921i29wkUZv4reje3fuE00`)
        const data = await response.json();
        // const data = [{name:"prabh"},{age:"18"},];
        console.log(data)
        this.setState({
            lVideos:data.items
        })
    }
    render(){
    return (
        <div className="latestVideos">
           <div className="latestVideos_videos">
            
           {this.state.lVideos.map((o,index)=>{
               return <VideoCard
               key={index}
               videoTitle={o.snippet.title}
               views={o.statistics.viewCount}
               publishedAt={o.snippet.publishedAt}
               channelId={o.snippet.channelId}
               thumbnail={o.snippet.thumbnails.medium.url}
               channelTitle={o.snippet.channelTitle}
               duration={o.contentDetails.duration}
               videoId={o.id}/>
           })}
           

           
           
           </div>
        </div>
    )
}
}

export default LatestVideos
