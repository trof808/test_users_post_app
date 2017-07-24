import React, { Component } from 'react';
import { Table, Checkbox, Icon } from 'semantic-ui-react';
import {store} from '../redux/store';
import {addPosts, addPostById} from '../redux/actions';

class PostsTable extends Component {
    render() {
        return (
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell></Table.HeaderCell>
                    <Table.HeaderCell>Пользователь</Table.HeaderCell>
                    <Table.HeaderCell>Тема</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {this.props.posts.map((post) => {
                        return (
                            <Table.Row key={post.id}>
                                <Table.Cell></Table.Cell>
                                <Table.Cell>{this.props.users[post.userId].name}</Table.Cell>
                                <Table.Cell>{post.title}</Table.Cell>
                            </Table.Row>
                        )
                    })}
                    
                </Table.Body>
            </Table>
        )
    }
}

export default PostsTable;