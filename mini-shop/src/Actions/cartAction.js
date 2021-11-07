import axios from 'axios'
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
} from '../Constants/cartConstants'

export const addToCart = (id, qty) => async (dispatch, getState) => {

    const { data } = await axios.get(`/get_product?product_id=${id}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            id: data.id,
            title: data.title,
            image: data.small_pic,
            price: data.price,
            countInStock: data.maxcount,
            qty
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}