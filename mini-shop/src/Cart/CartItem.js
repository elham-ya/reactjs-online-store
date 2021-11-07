import CartItemForm from '../Cart/CartItemForm'

const CartItem = (props) => {

    const addToCartHandler = (amount) => {

    }

    return (
        <li className="cart-item">
            <div className="cart-image">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="cart-info">
                <h3>{props.name}</h3>
                <div className="cart-price">{props.price}</div>
                <CartItemForm id={props.id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
}
export default CartItem;