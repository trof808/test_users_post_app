const types = {
    ADD_USERS: 'ADD_USERS',
    ADD_POSTS: 'ADD_POSTS',
    ADD_POST_BY_ID: 'ADD_POST_BY_ID',
    REMOVE_ALL_FROM_SHOW: 'REMOVE_ALL_FROM_SHOW',
    REMOVE_POST_BY_ID: 'REMOVE_POST_BY_ID'
}

export const addUsers = (users) => {
    return { type: types.ADD_USERS, users }
}

export const addPosts = (posts) => {
    return { type: types.ADD_POSTS, posts }
}

export const addPostById = (id) => {
    return { type: types.ADD_POST_BY_ID, id }
}

export const removeAllFromShow = () => {
    return { type: types.REMOVE_ALL_FROM_SHOW }
}

export const removePostById = (id) => {
    return { type: types.REMOVE_POST_BY_ID, id }
}