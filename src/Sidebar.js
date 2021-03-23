import React from 'react'
import './sidebar.css'
import SideBarRow from './SideBarRow'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import { ExpandMoreOutlined, OndemandVideo, ThumbUpAltOutlined, VideoLibrary,History, WatchLater } from '@material-ui/icons'

function Sidebar() {
    return (
        
        <div className="sidebar">
            <div className="sidebar_inner">
            <SideBarRow selected Icon={HomeIcon} title="Home"/>
            <SideBarRow Icon={WhatshotIcon} title="Trending"/>
            <SideBarRow Icon={SubscriptionsIcon} title="Subscription"/>
            <SideBarRow Icon={VideoLibrary} title="Library"/>
            <SideBarRow Icon={History} title="History" hideMobile="true"/>
            <SideBarRow Icon={OndemandVideo} title="Your Videos" hideMobile="true"/>
            <SideBarRow Icon={WatchLater} title="Watch Later" hideMobile="true"/>
            <SideBarRow Icon={ThumbUpAltOutlined} title="Liked Videos" hideMobile="true"/>
            <SideBarRow Icon={ExpandMoreOutlined} title="Show more" hideMobile="true"/>
            <hr/>
            </div>
        </div>

    )
}

export default Sidebar
