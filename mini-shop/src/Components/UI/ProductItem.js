import React from 'react';
import ShoppingCartIcon from '../../assets/cart-plus-solid.png';


const ProductItem = props => {
    return (
        <div key={props.id} className="item-box">
            <div className="img-wrapper">
                <img src={props.source} alt={props.title} />
            </div>
            <div className="info">
                <div className="item-title">{props.title}</div>
                <div className="price">
                    {props.price}
                    <span className="price-unit">تومان</span>
                </div>
                <button className="add-to-cart"><img src={ShoppingCartIcon} alt="shop" /></button>
            </div>
        </div>
    )
}
export default ProductItem;