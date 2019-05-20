import React, { Component } from 'react';

class Message extends Component {
    render() {
        var { Messages } = this.props;
        return (
            <div className="alert1 success">
                <span className="closebtn1">&times;</span>
                <strong>{Messages} &nbsp;&nbsp;
                    <a className="btn btn-info" href="http://localhost:3000/Cart" >Go Cart</a></strong>

            </div>
        );
    }
}
export default Message;