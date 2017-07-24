import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import UserPage from './UserPage';
import PostPage from './PostPage';
import { Button, Divider } from 'semantic-ui-react'

class Root extends Component {
    
    render() {
        const style = {
            padding: '10px 0px'
        }
        return (
            <Router>
                <div className="ui container" style={style}>
                    <Link to="/users"><Button primary>Пользователи</Button></Link>
                    <Link to="/posts"><Button primary>Посты</Button></Link>
                    <Divider />
                    <Route path='/users' component={UserPage} />
                    <Route path='/posts' component={PostPage} />
                </div>
            </Router>
        )
    }
}

export default Root;