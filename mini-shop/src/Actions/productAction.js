import axios from "axios";
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
} from '../Constants/productConstant'



export const listProducts = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })

        const { data } = await axios.get(`/get_product?categories=${id}`);
        console.log('data from product: ', data.list)

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data.list
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.respone && error.respone.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}