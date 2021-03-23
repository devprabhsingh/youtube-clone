
import React from 'react'
import './VideoCard.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';

function VideoCard({videoTitle,channelTitle,thumbnail,channelId,duration,views,publishedAt,videoId,desc,id}) {

    const getTimeStamp =()=>{
        
        let today = Date.now();
        
        let pdate = new Date(publishedAt);
        pdate = pdate.getTime();
        const diffTime = Math.abs(today - pdate);
        const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24)); 
        const diffHours = Math.round(diffDays*24);
        const diffMins = Math.round(diffHours*60)

        if(diffHours<1) return diffMins+" minutes ago";
        else if(diffHours===1) return diffHours+" hour ago"
        else if(diffDays<1) return diffHours+" hours ago";
        else if(diffDays===1) return diffDays+" day ago";
        return diffDays +" days ago";
    }

    const getDuration=()=>{
        let d = duration;
        d = d.slice(2);
        let mins="";
        let i=0;
        let flag=false;
        
        for(let x=0;x<d.length;x++){
        if(d.charAt(x)==="M"){
            flag=true;
            break;
        }
        mins+=d.charAt(x)
        i=x+2;

    }

    if(!flag){
        mins="0";
        i=0;
    }
        let secs = d.slice(i,d.length-1);
        if(secs===""){
            secs = "00"
        }
        else if(secs.length===1){
            secs = "0"+secs
        }
        return mins+":"+secs;
    }

    const getViews=()=>{
        let v = parseInt(views);
        if(v<1000000) return (v/1000).toFixed(1)+"k views";
        else if(v>=1000000 && v<1000000000) return ((v/1000)/1000).toFixed(1)+"M views";
        else if(v>=1000000000) return (v/1000000000).toFixed(1)+"B views";
    }

    const shortVideoTitle=()=>{
        if(window.innerWidth<450) return videoTitle.slice(0,30)+"...";
        return videoTitle;
    }
        
    
    return (
        <div className={`videoCard ${id==="searchResults" && 'searchRVideos'}`}>
            
            <div className={`durationOnImg`}>
            <a href={`https://www.youtube.com/watch?v=${videoId}`}>
            <img className={`videoCard_thumbnail ${id==="searchResults" && 'searchRVideosImg'}`} src={thumbnail} alt={videoTitle}/>
            </a>
            <p className={`duration ${id==="searchResults" && 'searchRVideosDur'}`}>{getDuration()}</p>
            </div>
            <div className={`${id!=="searchResults" && `wrapOpt_Info`}`}>
            <div className={`videoCard_info ${id==="searchResults" && 'searchRVideosInfo'}`}>
                
                    <h4><a href={`https://www.youtube.com/watch?v=${videoId}`}>{shortVideoTitle()}</a></h4>
                    <a href={`https://www.youtube.com/channel/${channelId}`}>{channelTitle}</a>
                    <p>{getViews()} {getTimeStamp()}</p>
                    <p className="description">{id==="searchResults" && desc}</p>
            </div>
            <MoreVertIcon className={`optForLVideos ${id!=="searchResults" && 'lVideosOpt'}`}/>
            
            </div>
            <MoreVertIcon className={`optIcon ${id==="searchResults" && 'searchRVideosOpt'}`}/>
        </div>
    )
}

export default VideoCard
