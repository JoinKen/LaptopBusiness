
import React, { Component } from 'react';

import {connect} from 'react-redux';

class iteam_arrivals extends Component {
    render() {
        return (
                <div
                    className="owl-item cloned"
                    style={{ width: 165, marginRight: 30 }}
                >
                    <div className="owl-item">
                        <div className="viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                            <div className="viewed_image">
                                <img alt="true" src={this.props.info.img}/>
                            </div>
                            <div className="viewed_content text-center">
                                <div className="viewed_price">
                            </div>
                                    <span>${this.props.info.priceEntered}</span>
                                </div>
                                <div className="viewed_name">
                                    <a href="#">{this.props.info.nameProduct}</a>
                                </div>
                            </div>
                            <ul className="item_marks">
                                <li className="item_mark item_discount">
                                   {this.props.info.salePrice}
</li>
                                <li className="item_mark item_new">new</li>
                            </ul>
                        </div>
                    </div>
    
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        products:state.products
    }
}
export default connect(mapStateToProps,null) (iteam_arrivals);
