import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

import { connect } from 'react-redux';
import { getPosts, deletePost, getSinglePost } from '../../actions/postActions';
import PropTypes from 'prop-types';
import moment from 'moment'


class Post extends Component {

    componentDidMount() {
        this.props.getPosts();
    }

    onPostClick = (id) => {
        this.props.getSinglePost(id);
        this.props.history.push(`/post/${id}`);
    }

    onPostEditClick = (id) => {
        this.props.getSinglePost(id);
        //this.props.history.push(`/post/${id}`);
    }

    deletePost = (id) => {
        this.props.deletePost(id);
    }

    render() {
        const { posts } = this.props.post;
        return (
            <div className='container'>
                <div className='mt-5'>


                    {this.props.auth.isAuthinticated ? <Link to="/post/add" className="btn btn-primary">Add Post</Link> : null}

                    <div className='post-container'>



                        {posts.map(({ _id, title, body, author, createdAt }) => (
                            <Card className='mt-3' key={_id}>
                                <Card.Body>
                                    <Card.Title>
                                        <Link to={`/post/show/${_id}`} onClick={this.onPostClick.bind(this, _id)} style={{ textDecoration: 'none' }}><h4>{title}</h4></Link>
                                        <small>By:{author}  On: {moment(createdAt).startOf('hour').fromNow()}</small>
                                    </Card.Title>
                                    <Card.Text>
                                        {body}
                                    </Card.Text>

                                    {this.props.auth.isAuthinticated ? <Link to={`/post/edit/${_id}`} onClick={this.onPostEditClick.bind(this, _id)} className='mr-2'>Edit</Link> : null}
                                    {this.props.auth.isAuthinticated ? <Link to="#" className='mr-2' onClick={this.deletePost.bind(this, _id)}>Delete</Link> : null}


                                </Card.Body>
                            </Card>
                        ))}


                    </div>
                </div>
            </div>
        )
    }
}



Post.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    post: state.post,
    auth: state.auth
});

export default connect(mapStateToProps, { getPosts, deletePost, getSinglePost })(Post);
