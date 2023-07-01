import { combineReducers } from "redux";

const postReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_POST":
            return [...state, { text: action.payload.text, id: action.payload.id }]
        default: return state
    }
}
const authReducer = (state = [], action) => {
    switch (action.type) {
        case 'user':
            return [...state, { isLoggedIn: action.payload.isLoggedIn, data: action.payload.data }]
        default: return state
    }
}


const rootReducer = combineReducers({
    posts: postReducer,
    isLoggedIn: authReducer
});
export default rootReducer; 