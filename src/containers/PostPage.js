import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import {store} from '../redux/store';
import PostsTable from '../components/PostsTable';
import {addToStar, removeFromStar} from '../redux/actions';


class PostPage extends Component {

    state = {
        posts: [],
        starPosts: [],
        users: []
    }

    // componentDidMount() {
    //     store.subscribe(() => {this.setState({ starPosts: store.getState().postsReducer.starPosts })})
    // }

    componentWillMount() {
        this.setState({ 
            posts: store.getState().postsReducer.postsToShow.length === 0 ? store.getState().postsReducer.posts : store.getState().postsReducer.postsToShow,
            users: store.getState().usersReducer.users,
            starPosts: store.getState().postsReducer.starPosts
        })
    }

    addToStar = (id) => {
        store.dispatch(addToStar(id))
        this.setState({ starPosts: store.getState().postsReducer.starPosts })
    }

    removeFromStar = (id) => {
        store.dispatch(removeFromStar(id))
        // store.subscribe(() => {this.setState({ starPosts: store.getState().postsReducer.starPosts })})
        this.setState({ starPosts: store.getState().postsReducer.starPosts })
    }
    
    render() {
        return (
            <div>
                <Link to="/users">Пользователи</Link>
                <h2>Избранные посты</h2>
                <PostsTable posts={this.state.starPosts} users={this.state.users} handleRemoveFromStar={this.removeFromStar} addToStar={false} />
                <h2>Выбранные посты</h2>
                <PostsTable posts={this.state.posts} users={this.state.users} handleAddToStar={this.addToStar} addToStar={true} />
            </div>
        )
    }

}

export default PostPage;