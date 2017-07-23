import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import UserPage from './UserPage';
import PostPage from './PostPage';

class Root extends Component {
    
    render() {

        return (
            <Router>
                <div>
                    <Link to="/users"><button>Пользователи</button></Link>
                    <Link to="/posts"><button>Посты</button></Link>
                    <hr/>
                    <Route path='/users' component={UserPage} />
                    <Route path='/posts' component={PostPage} />
                </div>
            </Router>
        )
    }
}

export default Root;