import axios from 'axios'
import {
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    CATEGORY_LIST_FAIL,
} from '../Constants/categoryConstant'

export const listCategories = () => async (dispatch) => {
    try {
        dispatch({ type: CATEGORY_LIST_REQUEST })
        const { data } = await axios.get('/get_categories');
        dispatch({
            type: CATEGORY_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CATEGORY_LIST_FAIL,
            payload: error.respone && error.respone.data.message
                ? error.response.data.message
                : error.message,
        })
    }

}