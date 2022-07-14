import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk'
import { layAPIReducer } from './reducers/layAPIReducer';
import { categoryReducer } from './reducers/categoryReducer';


const rootReducer = combineReducers({
    layAPIReducer,
    categoryReducer
})

export const store = createStore (rootReducer,applyMiddleware(thunk) )


