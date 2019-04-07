
import React, { Component } from 'react'
import HomePage from '../Components/HomePage/homePage';

class Home extends Component {
  render() {
    return (
      <div>
        <HomePage />
        <script src="../assets/js/jquery-3.3.1.min.js"></script>
            <script src="../assets/styles/bootstrap4/popper.js"></script>
            <script src="../assets/styles/bootstrap4/bootstrap.min.js"></script>
            <script src="../assets/plugins/greensock/TweenMax.min.js"></script>
            <script src="../assets/plugins/greensock/TimelineMax.min.js"></script>
            <script src="../assets/plugins/scrollmagic/ScrollMagic.min.js"></script>
            <script src="../assets/plugins/greensock/animation.gsap.min.js"></script>
            <script src="../assets/plugins/greensock/ScrollToPlugin.min.js"></script>
            <script src="../assets/plugins/OwlCarousel2-2.2.1/owl.carousel.js"></script>
            <script src="../assets/plugins/slick-1.8.0/slick.js"></script>
            <script src="../assets/plugins/easing/easing.js"></script>
            <script src="../assets/js/custom.js"></script>
      </div>
    )
  }
}
export default Home;
