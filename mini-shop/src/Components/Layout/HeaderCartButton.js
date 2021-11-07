import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Cart from '../Cart/Cart';
import MenuShoppingCartIcon from '../../assets/Cart.png'

const HeaderCartButton = props => {
    const [showCart, setShowCart] = useState(false)

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    const ShowCartHandler = () => {
        setShowCart(true);
    }

    const CloseCartHandler = () => {
        setShowCart(false);
    }

    const numberOfCartItems = cartItems.reduce((accNumber, item) => {
        return accNumber + item.qty
    }, 0)
    return (
        <div className="shop-cart-wrapper">
            <button onClick={ShowCartHandler} className="button">
                <span className="cart-icon"><img src={MenuShoppingCartIcon} alt="icon" /></span>
                <span className="badge">
                    {numberOfCartItems}
                </span>
            </button>
            {showCart && <Cart onClose={CloseCartHandler} />}
        </div>
    )
}

export default HeaderCartButton;