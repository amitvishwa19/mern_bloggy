import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPost } from '../../actions/postActions';


class AddPost extends Component {

    state = {
        title: '',
        body: '',
        btnAnimation: 'none'
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ btnAnimation: 'border' })

        const newPost = {
            title: this.state.title,
            body: this.state.body,
            author: 'Vishwa'
        }
        this.props.addPost(newPost);
        this.props.history.push('/posts');
    }

    clickCancel = (e) => {

    }

    render() {
        return (
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


                        <Button variant="primary" type="submit" size='sm' className='mr-1'>Add Post</Button>

                        <Link to='/posts' className='btn btn-dark btn-sm' size='sm'>Cancel</Link>

                    </Form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    post: state.post
});

export default connect(mapStateToProps, { addPost })(AddPost);
