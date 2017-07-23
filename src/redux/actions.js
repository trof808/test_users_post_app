const types = {
    ADD_USERS: 'ADD_USERS'
}

export const addUsers = (users) => {
    return { type: types.ADD_USERS, users }
}