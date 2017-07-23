import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import { Table } from 'semantic-ui-react';
import {store} from '../redux/store';
import {addUsers} from '../redux/actions';

class UserPage extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        store.subscribe(() => { console.log(store.getState().users) });
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            store.dispatch(addUsers(data));
        })
    }

    render() {
        return (
            <div>
                <Link to="/posts">Посты</Link>
                <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Имя</Table.HeaderCell>
                        <Table.HeaderCell>Username</Table.HeaderCell>
                        <Table.HeaderCell>E-mail</Table.HeaderCell>
                        <Table.HeaderCell>Телефон</Table.HeaderCell>
                        <Table.HeaderCell>Адрес</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        this.state.users.map((user) => {
                            return (<Table.Row key={user.id}>
                                <Table.Cell>{user.name}</Table.Cell>
                                <Table.Cell>{user.username}</Table.Cell>
                                <Table.Cell>{user.email}</Table.Cell>
                                <Table.Cell>{user.phone}</Table.Cell>
                                <Table.Cell>{user.address.street}</Table.Cell>
                            </Table.Row> )
                        })
                    }
                </Table.Body>
                </Table>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default UserPage;