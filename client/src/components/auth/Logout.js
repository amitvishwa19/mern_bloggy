import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authAction';
import PropTypes from 'prop-types';

export class Logout extends Component {

    static propTypes = {
        logout: PropTypes.func.isRequired
    }

    render() {
        return (
            <div onClick={this.props.logout}>
                Logout
            </div>
        )
    }
}

export default connect(null, { logout })(Logout);
