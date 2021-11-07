import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { categoryListReducers } from './Reducers/categoryReducer'
import { productListReducers } from './Reducers/productReducer'
import { cartReducer } from './Reducers/cartReducer'

const reducer = combineReducers({
    categoryList: categoryListReducers,
    productList: productListReducers,
    cart: cartReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage
    }

}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))


export default store