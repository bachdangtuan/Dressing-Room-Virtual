import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk'
import { layAPIReducer } from './reducers/layAPIReducer';
import { categoryReducer } from './reducers/categoryReducer';
import { modelReducer } from './reducers/modelReducer';

const rootReducer = combineReducers({
    layAPIReducer,
    categoryReducer,
    modelReducer
})

export const store = createStore (rootReducer,applyMiddleware(thunk) )


