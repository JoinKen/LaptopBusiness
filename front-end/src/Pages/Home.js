
import React, { Component } from 'react';
import '../App.css';
import Banner from '../Components/banner';
import Characteristics from '../Components/characteristics';
import DealsFeature from '../Components/deals_featureds';
import Banner2 from '../Components/banner2';
import NewArrivals from '../Components/new_arrivals';
import BestSeller from '../Components/best_sellers';
import Adverts from '../Components/adverts';
import Trends from '../Components/trends';
import Reviews from '../Components/reviews';
import Viewed from '../Components/viewed';
import Brands from '../Components/brands';
import NewLetter from '../Components/newslettesr';
class homePage extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Characteristics />
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
