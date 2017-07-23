export const users = (users = [], action) => {
    switch(action.type) {
        case 'ADD_USERS':
            return [...users, action.users];
        default:
            return users;
    }
}