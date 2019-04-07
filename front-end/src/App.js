import React, { Component } from 'react';
import HomePage from '../src/Components/HomePage/homePage';
import ListLapTop from '../src/Components/Laptop/listLapTop';
import Footer from './Components/footer';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import routes from '../src/router';
import '../src/App.js';
import Header from './Components/header';

class App extends Component {
 
  render() {
    return (
      <Router>
       <div className="App">
     <Header/>
      {this.showContent(routes)}
      <Footer/>
       </div>
     
      </Router>
     
     
    );
  }
  showContent = (routes) =>{
    var result = null;
    if(routes.length > 0){
      result = routes.map((route,index)=>{
        return (
          <Route
          key = {index}
          path ={route.path}
          exact = {route.exact}
          component ={route.main}
          />
         
        )
      })
      return <Switch>{result}</Switch>
    }
  }
}


export default App;
