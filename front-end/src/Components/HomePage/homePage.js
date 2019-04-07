
import React, { Component } from 'react';
import '../../App.css';
// import component
import TopBar from '../top_bar';
import Banner from '../banner';
import Characteristics from '../characteristics';
import Deals_feature from '../deals_featured';
import Categories from '../popular_categories';
import Banner2 from '../banner2';
import Arrival from '../new_arrivals';
import BestSeller from '../bestseller';
import RecentView from '../recentview';
import Footer from '../footer';
import NewLetter from '../newletter';

// import ListLapTop from '../Laptop/listLapTop';
class homePage extends Component {
  render() {
    return (
      <div>
     <TopBar/>
      <Banner/>
      <Characteristics/>
      <RecentView/>
      <Deals_feature/>
     
      <Categories/>
      <Banner2/>
      <Arrival/>
      <BestSeller/>
      <NewLetter/>
     
      </div>
    )
  }

}
export default homePage;
