import { TuneOutlined } from '@material-ui/icons'
import React from 'react'
import './SearchPage.css'
import VideoCard from './VideoCard'

function SearchPage({data}) { 

    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneOutlined/>
                <h2>FILTER</h2>
            </div>

            <hr/>
         <div className="searchResults">
         {data.map((o,index)=>{
               return <VideoCard
               id="searchResults"
               key={index}
               videoTitle={o.snippet.title}
               desc={o.snippet.description}
               views="1M"
               publishedAt="1 day ago"
               channelId={o.snippet.channelId}
               thumbnail={o.snippet.thumbnails.medium.url}
               channelTitle={o.snippet.channelTitle}
               duration="PT1M59S"
               videoId={o.id}/>
           })}
         </div>
        </div>
    )
}

export default SearchPage
