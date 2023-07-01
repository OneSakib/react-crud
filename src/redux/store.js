import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
// middleware
import authMiddleware from './middleware/auth'
// Apply Middleware 
const middleware = applyMiddleware(authMiddleware)
const store = createStore(
    rootReducer,
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store;