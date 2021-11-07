import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Actions/cartAction'
import ShoppingCartIcon from '../../assets/cart-plus-solid.png';


const ProductItem = props => {

    const [qty, setQty] = useState(1)
    const dispatch = useDispatch();
    const id = props.id

    const addToCartHandler = () => {
        setQty(qty + 1)
        dispatch(addToCart(id, qty))
    }

    return (
        <div className="item-box">
            <div className="img-wrapper">
                <img src={props.source} alt={props.title} />
            </div>
            <div className="info">
                <div className="item-title">{props.title}</div>
                <div className="volume">{props.volume}</div>
                <div className="price">
                    {props.price}
                    <span className="price-unit">تومان</span>
                </div>
                <button onClick={addToCartHandler} className="add-to-cart">
                    <img src={ShoppingCartIcon} alt="shop" />
                </button>
            </div>
        </div>
    )
}
export default ProductItem;