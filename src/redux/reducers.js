import _ from 'lodash';

const initialState = {
    users: [],
    posts: [],
    postsToShow: []
}


export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_USERS':
            return Object.assign({}, state, {users: action.users});
        default:
            return state;
    }
}

export const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_POSTS':
            return Object.assign({}, state, {posts: action.posts});
        case 'ADD_POST_BY_ID':
            const newPosts = _.filter(state.posts, post => post.userId == action.id);
            return { 
                ...state,
                postsToShow: state.postsToShow.concat(newPosts)
            }
        case 'REMOVE_POST_BY_ID':
            const newPosts1 = _.filter(state.postsToShow, post => post.userId !== action.id);
            return {
                ...state,
                postsToShow: newPosts1
            }
        case 'REMOVE_ALL_FROM_SHOW':
            return { 
                ...state,
                postsToShow: []
            }
        default:
            return state;
    }
}