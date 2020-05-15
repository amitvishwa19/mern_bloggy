import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Form, Col, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authAction';
import { clearErrors } from '../../actions/errorAction';
import { changname } from '../../actions/testAction';


class Login extends Component {
    state = {
        email: '',
        password: '',
        msg: null,
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired

    }



    componentDidUpdate(prevProps) {

        const { error, isAuthenticated } = this.props

        //this.setState({ msg: error.msg.msg })
        if (error !== prevProps.error) {
            if (error.id === 'LOGIN_FAIL') {
                this.setState({ msg: error.msg.msg })
            } else {
                this.setState({ msg: null })
            }
        }

        if (isAuthenticated) {
            console.log('Authentication success,will redirect to home')
            this.props.history.push(`/posts`);
        }


    }

    onTextChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const User = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.login(User)
    }

    render() {
        return (
            <div className='container'>
                <Col sm={6} style={loginContainer}>
                    <div style={{ textAlign: 'center' }} className='mb-2'>Logo Image</div>
                    <Form onSubmit={this.onSubmit}>

                        <h4 style={{ textAlign: 'center', marginBottom: '30px' }}>Login</h4>
                        {this.state.msg ? (<Alert variant='danger' >{this.state.msg}</Alert>) : null}

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.onTextChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" onChange={this.onTextChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>

                        <Button variant="dark" type="submit" className='mr-3'>
                            Login
                        </Button> Don't have account? <Link to='/auth/register'>Register</Link> here

                    </Form>
                </Col>
            </div>
        )
    }
}

const loginContainer = {
    marginTop: '100px',
    margin: '100px auto'
}

// Login.propTypes = {
//     isAuthenticated: PropTypes.bool,
//     error: PropTypes.object.isRequired,
//     login: PropTypes.func.isRequired,
//     clearErrors: PropTypes.func.isRequired

// }



const mapStatetoProps = (state) => ({
    isAuthenticated: state.auth.isAuthinticated,
    error: state.error
})


export default connect(mapStatetoProps, { changname, login, clearErrors })(Login);