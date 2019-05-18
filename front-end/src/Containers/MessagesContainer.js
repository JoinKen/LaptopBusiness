import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../Components/Message';

class MessagesContainer extends Component {
    render() {
        var { Messages } = this.props;
        return (
            <Message Messages={Messages} />
        );
    }
}

const mapStateToProps = state => {
    return {
        Messages: state.Messages,
    }
}
export default connect(mapStateToProps, null)(MessagesContainer);
