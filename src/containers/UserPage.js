import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import UsersTable from '../components/UsersTable';
import {store} from '../redux/store';
import {addUsers, addPosts} from '../redux/actions';
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
            this.setState({ users: store.getState().usersReducer.users})
        })

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            store.dispatch(addPosts(data));
        })
    }

    render() {
        return (
            <div>
                {/*<Link to="/posts">Посты</Link>*/}
                <Input onChange={this.handleFindName} placeholder='Поиск по имени'/>
                <UsersTable users={this.state.users} onSort={this.handleSort}/>
            </div>
        )
    }

    handleFindName = (e) => {
        let inputName = e.target.value;
        this.setState({ users: store.getState().usersReducer.users.filter(user => {
            let match = user.name.toLowerCase().indexOf(inputName.toLowerCase())
            return (match !== -1)
        }) })
    }

    handleSort = (filterBy, filterDirection) => {
        this.setState({ users:  this.state.users.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            const usernameA = a.username.toLowerCase();
            const usernameB = b.username.toLowerCase();
            const emailA = a.email.toLowerCase();
            const emailB = b.email.toLowerCase();
            const phoneA = a.phone.toLowerCase();
            const phoneB = b.phone.toLowerCase();
            const addressA = a.address.street.toLowerCase();
            const addressB = b.address.street.toLowerCase();
            if(filterBy === 'name') {
                if(filterDirection) {
                    return nameA < nameB ? -1 : 1 
                } else {
                    return nameA < nameB ? 1 : -1
                }
            }
            if(filterBy === 'username') {
                if(filterDirection) {
                    return usernameA < usernameB ? -1 : 1 
                } else {
                    return usernameA < usernameB ? 1 : -1
                }
            }
            if(filterBy === 'email') {
                if(filterDirection) {
                    return emailA < emailB ? -1 : 1 
                } else {
                    return emailA < emailB ? 1 : -1
                }
            }
            if(filterBy === 'tel') {
                if(filterDirection) {
                    return phoneA < phoneB ? -1 : 1 
                } else {
                    return phoneA < phoneB ? 1 : -1
                }
            }
            if(filterBy === 'address') {
                if(filterDirection) {
                    return addressA < addressB ? -1 : 1 
                } else {
                    return addressA < addressB ? 1 : -1
                }
            }
        })});
    }
}

// const mapStateProps = (store) => {
//     return {
//         users: store.usersReducer
//     }
// }

// export default connect(mapStateProps)(UserPage);
export default UserPage;