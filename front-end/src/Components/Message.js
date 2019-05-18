import React, { Component } from 'react';

class Message extends Component {
    render() {
        var { Messages } = this.props;
        return (
            <div className="alert1 success">
                <span className="closebtn1">&times;</span>
                <strong>{Messages}</strong>
            </div>
        );
    }
}
export default Message;