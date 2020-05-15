import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Jumbotron} from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <div className='container'>
                <Jumbotron className='mt-50' style={jtStyle}>
                    <h1>Welcome to MERN App</h1>
                    <p>Welcome to the Digizigs Blog! Here we'll be talking about everything computer science. Basics, framesworkds, machine learning, other data science stuff, any new tech or findings, and pretty much anything computer science related.</p>
                    <p>Go visit us at our website <a href="http://www.digizigs.com">digizigs.com</a> to check out more cool stuff beyond just blogs.</p>
                    <p>
                        <Link to='/posts' className="btn btn-primary">Go To Posts &raquo;</Link>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}

const jtStyle={
    marginTop:'50px'
}