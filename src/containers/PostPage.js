import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import {store} from '../redux/store';
import PostsTable from '../components/PostsTable';

class PostPage extends Component {

    state = {
        posts: [],
        users: []
    }

    componentWillMount() {
        this.setState({ 
            posts: store.getState().postsReducer.postsToShow.length === 0 ? store.getState().postsReducer.posts : store.getState().postsReducer.postsToShow,
            users: store.getState().usersReducer.users
        })
    }
    
    render() {
        return (
            <div>
                <Link to="/users">Пользователи</Link>
                <PostsTable posts={this.state.posts} users={this.state.users} />
            </div>
        )
    }
}

export default PostPage;