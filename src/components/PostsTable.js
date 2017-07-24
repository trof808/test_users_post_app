import React, { Component } from 'react';
import { Table, Checkbox, Icon } from 'semantic-ui-react';
import {store} from '../redux/store';
import {addPosts, addPostById} from '../redux/actions';

class PostsTable extends Component {
    
    state = {
        open: false
    }

    addToStar = (id) => {
        this.props.handleAddToStar(id);
    }

    removeFromStar = (id) => {
        this.props.handleRemoveFromStar(id);
    }

    render() {
        return (
            <Table singleLine selectable>
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
                                {
                                    this.props.addToStar ?
                                    <Table.Cell><button onClick={() => {this.addToStar(post.id)}}>Добавить в избранное</button></Table.Cell> :
                                    <Table.Cell><button onClick={() => {this.removeFromStar(post.id)}}>Удалить из избранного</button></Table.Cell>
                                }
                                <Table.Cell onClick={() => {this.props.openModal(post.id)}}>{this.props.users[post.userId-1].name}</Table.Cell>
                                <Table.Cell onClick={() => {this.props.openModal(post.id)}}>{post.title}</Table.Cell>
                            </Table.Row>
                        )
                    })}
                    
                </Table.Body>
            </Table>
        )
    }
}

export default PostsTable;