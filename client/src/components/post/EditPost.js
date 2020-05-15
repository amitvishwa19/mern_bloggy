import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import { addPost } from '../../actions/postActions';

import { getSinglePost, updatePost } from '../../actions/postActions';
//import PropTypes from 'prop-types';

export class EditPost extends Component {

    state = {
        _id: '',
        title: '',
        body: '',
        author: '',
        createdAt: ''
    }

    componentDidUpdate(previousProps, previousState) {
        const { _id, title, body } = this.props.post
        if (previousProps !== this.props) {
            this.setState({ _id, title, body })
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        //this.setState({btnAnimation:'border'})

        const post = {
            title: this.state.title,
            body: this.state.body,
            author: 'Vishwa'
        }
        this.props.updatePost(post, this.state._id);
        this.props.history.push('/posts');
    }

    render() {
        //console.log(this.props.post)
        //const { post } = this.props;

        //console.log(this.props.post.title)
        return (
            <div>
                <div className='container'>
                    <div className='mt-5'>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" name="title" value={this.state.title} onChange={this.onChange} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Content</Form.Label>
                                <Form.Control as="textarea" name="body" rows="10" value={this.state.body} onChange={this.onChange} />
                            </Form.Group>


                            <Button variant="primary" type="submit" size='sm' className='mr-1'>Update</Button>

                            <Link to='/posts' className='btn btn-dark btn-sm' size='sm'>Cancel</Link>

                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

EditPost.propTypes = {
    //getSinglePost: PropTypes.func.isRequired,
    //post: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    post: state.post.post
});

export default connect(mapStateToProps, { getSinglePost, updatePost })(EditPost);
