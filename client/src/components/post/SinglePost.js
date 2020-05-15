import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSinglePost } from '../../actions/postActions';
import moment from 'moment'

export class SinglePost extends Component {

    state = {
        post: this.props.post
    }

    onPostClick = (id) => {
        this.props.getSinglePost(id);
        //this.props.history.push(`/post/${id}`);
    }

    onPostEditClick = (id) => {
        this.props.getSinglePost(id);
        console.log('edit post clicked from single post');
        //this.props.history.push(`/post/${id}`);
    }


    render() {
        console.log(this.props.post)
        const { post } = this.props;
        return (
            <div className='container'>
                <h3 className="mt-5">{post.title}</h3>
                <small>By:{post.author} on: {moment(post.createdAt).startOf('hour').fromNow()}</small>
                <hr></hr>
                <p>{post.body}</p>
                <Link to={`/post/edit/${post._id}`} onClick={this.onPostEditClick.bind(this, post._id)} className='mr-2'>Edit</Link>
                <Link to='/posts'>Back</Link>
            </div>
        )
    }
}

SinglePost.propTypes = {
    //getSinglePost: PropTypes.func.isRequired,
    //post: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    post: state.post.post
});

export default connect(mapStateToProps, { getSinglePost })(SinglePost);
