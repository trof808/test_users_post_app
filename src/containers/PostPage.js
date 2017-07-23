import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class PostPage extends Component {
    
    render() {
        return (
            <div>
                <Link to="/users">Пользователи</Link>
                PostPage
            </div>
        )
    }
}

export default PostPage;