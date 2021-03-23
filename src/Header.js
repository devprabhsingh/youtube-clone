import React from 'react'
import './header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MicIcon from '@material-ui/icons/Mic';
import Avatar from '@material-ui/core/Avatar'
import {Link} from 'react-router-dom'

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            inputSearch:''
        }
    this.getQueryResult = this.getQueryResult.bind(this);
    this.toggleSideBar = this.toggleSideBar.bind(this);
    this.trendTagsUpdateState = this.trendTagsUpdateState.bind(this);
    }
    
    trendTagsUpdateState(e){
        e.target.style.color="white";
        e.target.style.backgroundColor="gray";
        this.props.renderSearchPage(true)
        this.setState({inputSearch:e.target.innerText},()=>{
            this.getQueryResult()
        })
    }
    getQueryResult= async()=>{
        if(this.state.inputSearch!==''){
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&q=${this.state.inputSearch}&key=AIzaSyB4qtRCkYTup921i29wkUZv4reje3fuE00`);
        const data = await response.json();
        this.props.passQueryData(data.items)
       }
      }

    toggleSideBar = ()=>{
        const bar = document.getElementsByClassName("sidebar")[0];
        if(bar.style.display==="none"){
            bar.style.display="block"
            
      
        }
        else{
            bar.style.display="none"
        }
    }
    render(){
    return (
        <div className="header_container">
            <div className="header">
            <div className="header_left">
            <div className="menuBar" onClick={this.toggleSideBar}><MenuIcon /></div>
            <Link to="/Home">
            <img className="header_logo" 
            src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
            alt="youtube icon"/>
            </Link>
            </div>

            <div className="header_input">
            <div className="border">
            <input onChange={e=>this.setState({inputSearch:e.target.value})}
                   value={this.state.inputSearch}
                   placeholder="Search"
                   type="text"/>
            <Link to = {`/search/${this.state.inputSearch}`}>
            <SearchIcon className="header_inputButton" onClick={this.getQueryResult}/>
            </Link>
            </div>
            <div className="right_icons">
            <MicIcon className="micIcon"/>
            </div>
            </div>

            <div className="header_right">
            <div className="right_icons">
            <VideoCallIcon className="header_icons"/>
            </div>
            <div className="right_icons">
            <AppsIcon className="header_icons"/>
            </div>
            <div className="right_icons">
            <NotificationsIcon className="header_icons"/>
            </div>
            <Avatar
                alt="Prabhjot Singh"
                src="https://dl.dropbox.com/s/605ousf2maq0d32/IMG_20200627_184944%20%281%29.jpg?dl=0"/>
            </div>
            </div>
            <div className="trendingTags"> 
            <p onClick={(e)=>this.trendTagsUpdateState(e)}>Farmers</p>
            <p onClick={(e)=>this.trendTagsUpdateState(e)}>PUBG</p>
            <p onClick={(e)=>this.trendTagsUpdateState(e)}>Arijit Singh</p>
            <p onClick={(e)=>this.trendTagsUpdateState(e)}>Firebase</p>
            <p onClick={(e)=>this.trendTagsUpdateState(e)}>Covid</p>
            <p onClick={(e)=>this.trendTagsUpdateState(e)}>Guru Randhawa</p>
            <p onClick={(e)=>this.trendTagsUpdateState(e)}>Ranjit Bawa</p>
            <p onClick={(e)=>this.trendTagsUpdateState(e)}>Vaccine</p>
            <p onClick={(e)=>this.trendTagsUpdateState(e)}>CBC News</p>
            <p onClick={(e)=>this.trendTagsUpdateState(e)}>Nora Fatehi</p>
            <p onClick={(e)=>this.trendTagsUpdateState(e)}>Technical Guruji</p>
            <p onClick={(e)=>this.trendTagsUpdateState(e)}>Sidhu Moose Wala</p>
            <p onClick={(e)=>this.trendTagsUpdateState(e)}>Lockdown</p>
            <p onClick={(e)=>this.trendTagsUpdateState(e)}>Diljit Dosanjh</p>
        </div>
        </div>
    )
}
}

export default Header
