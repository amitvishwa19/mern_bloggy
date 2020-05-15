import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Col, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authAction';

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        msg: null
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error } = this.props;
        if (error !== prevProps.error) {
            if (error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg.msg })
            } else {
                this.setState({ msg: null })
            }
        }
    }

    onTextChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        //const { email, password } = this.state;

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        this.props.register(newUser)

        console.log(this.props.error.msg)

        //console.log(this.props.error)
        //this.props.addPost(newPost);
        //this.props.history.push('/posts');
    }

    render() {
        return (
            <div className='container'>
                <Col sm={6} style={loginContainer}>
                    <div style={{ textAlign: 'center' }} className='mb-2'>Logo Image</div>
                    <Form onSubmit={this.onSubmit}>
                        <h4 style={{ textAlign: 'center', marginBottom: '30px' }}>Register</h4>
                        {this.state.msg ? (<Alert variant='danger' >{this.state.msg}</Alert>) : null}

                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter name" onChange={this.onTextChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.onTextChange} />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" onChange={this.onTextChange} />
                        </Form.Group>

                        <Form.Group controlId="formConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" name="cpassword" placeholder="Confirm Password" onChange={this.onTextChange} />
                        </Form.Group>

                        <Button variant="dark" type="submit" className='mr-3'>
                            Register
                        </Button>
                        Already having account? <Link to='/auth/login'>Login</Link> here
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

const mapStatetoProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(mapStatetoProps, { register })(Register);
