import React, { useState } from 'react';
import Cart from '../../Cart/Cart';
import ProductItem from '../UI/ProductItem';
import MenuShoppingCartIcon from '../../assets/Cart.png'

const HeaderCartButton = props => {

    const [showCart, setShowCart] = useState(false)

    const ShowCartHandler = () => {
        setShowCart(true);
    }

    return (
        <div className="shop-cart-wrapper">
            <button onClick={ShowCartHandler} className="button">
                <span className="cart-icon"><img src={MenuShoppingCartIcon} alt="icon" /></span>
                <span className="badge">3</span>
            </button>
            {showCart && <Cart />}
        </div>
    )
}

export default HeaderCartButton;