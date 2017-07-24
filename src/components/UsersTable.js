import React, { Component } from 'react';
import { Table, Checkbox, Icon } from 'semantic-ui-react';

class UsersTable extends Component {
    state = {
        filterBy: '',
        filterDirection: false
    }
    handleSort = () => {
        this.props.onSort(this.state.filterBy, this.state.filterDirection);
    }
    render() {
        return (
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell onClick={() => {this.setState({ filterBy: 'name', filterDirection: !this.state.filterDirection }); this.handleSort()}}>
                            Имя 
                            {
                                this.state.filterBy === 'name' ? <Icon name={ this.state.filterDirection ? 'caret down' : 'caret up'} /> : ''
                            }
                        </Table.HeaderCell>
                        <Table.HeaderCell onClick={() => {this.setState({ filterBy: 'username', filterDirection: !this.state.filterDirection }); this.handleSort()}}>
                            Username
                            {
                                this.state.filterBy === 'username' ? <Icon name={ this.state.filterDirection ? 'caret down' : 'caret up'} /> : ''
                            }
                        </Table.HeaderCell>
                        <Table.HeaderCell onClick={() => {this.setState({ filterBy: 'email', filterDirection: !this.state.filterDirection }); this.handleSort()}}>
                            E-mail
                            {
                                this.state.filterBy === 'email' ? <Icon name={ this.state.filterDirection ? 'caret down' : 'caret up'} /> : ''
                            }
                        </Table.HeaderCell>
                        <Table.HeaderCell onClick={() => {this.setState({ filterBy: 'tel', filterDirection: !this.state.filterDirection }); this.handleSort()}}>
                            Телефон
                            {
                                this.state.filterBy === 'tel' ? <Icon name={ this.state.filterDirection ? 'caret down' : 'caret up'} /> : ''
                            }
                        </Table.HeaderCell>
                        <Table.HeaderCell onClick={() => {this.setState({ filterBy: 'address', filterDirection: !this.state.filterDirection }); this.handleSort()}}>
                            Адрес
                            {
                                this.state.filterBy === 'address' ? <Icon name={ this.state.filterDirection ? 'caret down' : 'caret up'} /> : ''
                            }
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        this.props.users.map((user) => {
                            return (
                            <Table.Row key={user.id}>
                                <Table.Cell collapsing>
                                    <Checkbox />
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