
import React, { Component } from 'react';
import '../../App.css';
import Banner from '../banner';
import Characteristics from '../characteristics';
import DealsFeature from '../deals_featureds';
import Banner2 from '../banner2';
import NewArrivals from '../new_arrivals';
import BestSeller from '../best_sellers';
import Adverts from '../adverts';
import Trends from '../trends';
import Reviews from '../reviews';
import Viewed from '../viewed';
import Brands from '../brands';
import NewLetter from '../newslettesr';

class homePage extends Component {
  render() {
    return (
      <div>
        {/* <RecentViews/> */}
        <Banner />
        <Characteristics />
        {/* <RecentViews /> */}
        <DealsFeature />
        <Banner2 />
        <NewArrivals />
        <BestSeller />
        <Adverts />
        <Trends />
        <Reviews />
        <Viewed />
        <Brands />
        <NewLetter />
      </div>
    )
  }

}
export default homePage;
