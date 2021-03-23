import React from 'react'
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import SearchPage from './SearchPage';
import LatestVideos from './LatestVideos';

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      queryData:[],
      renderSearchPage:false 
    }
    
   this.passQueryData = this.passQueryData.bind(this);
   this.renderSearchResults = this.renderSearchResults.bind(this);
  }
 
  passQueryData(data) {
    this.setState({
      queryData: data
    });
  }
  
  renderSearchResults(status){
    this.setState({
      renderSearchPage:status
    })
  }

  render(){
  return (
    <div className="app">
      <Router>
      <Header passQueryData={this.passQueryData} renderSearchPage={this.renderSearchResults}/>
        <Switch>

          <Route path='/search/:searchTerm'>
            <div className="content_sidebar">
              <Sidebar/>
              <SearchPage data={this.state.queryData}/>
              </div>
            
          </Route>

          <Route path='/'>
            <div className="content_sidebar">
            <Sidebar/>
            {this.state.renderSearchPage? <SearchPage data={this.state.queryData}/>:<LatestVideos/>}
            </div>
         
          </Route>
  
        </Switch>
      </Router>
     
    </div>
  );
  }
}

export default App;
