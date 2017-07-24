import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import {store} from '../redux/store';
import PostsTable from '../components/PostsTable';
import {addToStar, removeFromStar} from '../redux/actions';
import { Modal } from 'semantic-ui-react';

class PostPage extends Component {

    state = {
        posts: [],
        starPosts: [],
        users: [],
        open: false,
        postId: 1
    }

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
    openModal = (id) => {
        this.setState({ open: true, postId: id })
    }
    close = () => {
        this.setState({ open: false })
    }
    render() {
        return (
            <div>
                <h2>Избранные посты</h2>
                <PostsTable posts={this.state.starPosts} users={this.state.users} handleRemoveFromStar={this.removeFromStar} addToStar={false} openModal={this.openModal} />
                <h2>Выбранные посты</h2>
                <PostsTable posts={this.state.posts} users={this.state.users} handleAddToStar={this.addToStar} addToStar={true} openModal={this.openModal} />
                <Modal size='small' open={this.state.open} onClose={this.close}>
                    <Modal.Header>
                        {this.state.posts[this.state.postId-1].title}
                    </Modal.Header>
                    <Modal.Content>
                        <p>{this.state.posts[this.state.postId-1].body}</p>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }

}

export default PostPage;