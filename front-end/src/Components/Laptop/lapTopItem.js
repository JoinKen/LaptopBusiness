import React, { Component } from 'react';
import {connect} from 'react-redux';


class lapTopItem extends Component {
  
  render() {
    return (
        <div className="milk-tea">
        <div className="milktea text-center">
        <div className="card-milktea">
            {/* <img className="card_img card-img-top" src={this.props.info.images} alt="Card image cap" /> */}
            <div className="card_img card-body">
                <h5 className="card-title">{this.props.info.nameProduct}</h5>
                <p className="card-text">Giá: {this.props.info.priceEntered}</p>
            </div>
        </div>
        </div>

      </div>
    )
  }
}
const mapStateToProps =(state) =>{
    return {
        products :state.products
    }
}

export default connect(mapStateToProps,null) (lapTopItem);
