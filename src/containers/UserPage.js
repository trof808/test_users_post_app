import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import UsersTable from '../components/UsersTable';
import {store} from '../redux/store';
import {addUsers} from '../redux/actions';
import { Input } from 'semantic-ui-react'

class UserPage extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            store.dispatch(addUsers(data));
            this.setState({ users: store.getState().users[0]})
        })
    }

    handleFindName = (e) => {
        let inputName = e.target.value;
        this.setState({ users: store.getState().users[0].filter(user => {
            let match = user.name.toLowerCase().indexOf(inputName.toLowerCase())
            return (match !== -1)
        }) })
    }

    render() {
        return (
            <div>
                {/*<Link to="/posts">Посты</Link>*/}
                <Input onChange={this.handleFindName} placeholder='Поиск по имени'/>
                <UsersTable users={this.state.users} />
            </div>
        )
    }
}

export default UserPage;