import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropsType from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

import Logout from '../../components/auth/Logout';


class Header extends Component {
    state = {
        isAuthinticated: false,
        user: null
    }

    static propsType = {
        auth: PropsType.object.isRequired
    }

    componentDidUpdate() {
        if (this.props.auth.isAuthinticated) {
            //this.props.history.push('/');
        }
    }

    render() {
        const { isAuthinticated, user } = this.props.auth;

        const authLink = (

            <NavDropdown title={user ? user.name ? user.name : user.email : ''} id="basic-nav-dropdown">
                <NavDropdown.Item to="#"><Logout /></NavDropdown.Item>
            </NavDropdown>

        )

        const guestLink = (
            <Fragment>
                <Nav.Link as={NavLink} to='/auth/login'>Login</Nav.Link>
                <Nav.Link as={NavLink} to='/auth/register'>Register</Nav.Link>
            </Fragment>
        )
        return (
            <div>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <div className="container">
                        <Link to='/'><Navbar.Brand>Bloggy</Navbar.Brand></Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link as={NavLink} to='/' exact>Home</Nav.Link>
                                <Nav.Link as={NavLink} to='/posts' exact>Posts</Nav.Link>
                                {isAuthinticated ? authLink : guestLink}
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div >
        )
    }
}



const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(Header);
