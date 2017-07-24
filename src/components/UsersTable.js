import React, { Component } from 'react';
import { Table, Checkbox, Icon, Button } from 'semantic-ui-react';
import {store} from '../redux/store';
import {addPosts, addPostById, removeAllFromShow, removePostById} from '../redux/actions';

class UsersTable extends Component {
    state = {
        filterBy: '',
        filterDirection: false,
        posts: []
    }
    componentDidMount() {
        store.subscribe(() => {console.log(store.getState().postsReducer.posts)})
        store.subscribe(() => { console.log(store.getState().postsReducer.postsToShow) })
        store.dispatch(removeAllFromShow());
    }
    handleSort = () => {
        this.props.onSort(this.state.filterBy, this.state.filterDirection);
    }
    handleCheck = (e) => {
        if(e.target.checked) {
            store.dispatch(addPostById(parseInt(e.target.name)))
        } else {
            store.dispatch(removePostById(parseInt(e.target.name)))
        }
    }
    render() {
        return (
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell onClick={() => {this.setState({ filterBy: 'name', filterDirection: !this.state.filterDirection }); this.handleSort()}}>
                            <Button>
                            Имя 
                            {
                                this.state.filterBy === 'name' ? <Icon name={ this.state.filterDirection ? 'caret down' : 'caret up'} /> : ''
                            }
                            </Button>
                        </Table.HeaderCell>
                        <Table.HeaderCell onClick={() => {this.setState({ filterBy: 'username', filterDirection: !this.state.filterDirection }); this.handleSort()}}>
                            <Button>
                            Username
                            {
                                this.state.filterBy === 'username' ? <Icon name={ this.state.filterDirection ? 'caret down' : 'caret up'} /> : ''
                            }
                            </Button>
                        </Table.HeaderCell>
                        <Table.HeaderCell onClick={() => {this.setState({ filterBy: 'email', filterDirection: !this.state.filterDirection }); this.handleSort()}}>
                            <Button>
                            E-mail
                            {
                                this.state.filterBy === 'email' ? <Icon name={ this.state.filterDirection ? 'caret down' : 'caret up'} /> : ''
                            }
                            </Button>
                        </Table.HeaderCell>
                        <Table.HeaderCell onClick={() => {this.setState({ filterBy: 'tel', filterDirection: !this.state.filterDirection }); this.handleSort()}}>
                            <Button>
                            Телефон
                            {
                                this.state.filterBy === 'tel' ? <Icon name={ this.state.filterDirection ? 'caret down' : 'caret up'} /> : ''
                            }
                            </Button>
                        </Table.HeaderCell>
                        <Table.HeaderCell onClick={() => {this.setState({ filterBy: 'address', filterDirection: !this.state.filterDirection }); this.handleSort()}}>
                            <Button>
                            Адрес
                            {
                                this.state.filterBy === 'address' ? <Icon name={ this.state.filterDirection ? 'caret down' : 'caret up'} /> : ''
                            }
                            </Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        this.props.users.map((user) => {
                            return (
                            <Table.Row key={user.id}>
                                <Table.Cell collapsing>
                                    <input type="checkbox" name={`${user.id}`} onChange={this.handleCheck} />
                                </Table.Cell>
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
        )
    }
}

export default UsersTable;