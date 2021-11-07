import { useSelector } from 'react-redux';
import CartItemForm from './CartItemForm'

const CartItem = () => {
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    return (
        cartItems.map((product) => {
            return (
                <li key={product.id} className="cart-item">
                    <div className="cart-image">
                        <img src={`https://shopapi.rc.liadev.ir/${product.image}`} alt={product.title} />
                    </div>
                    <div className="cart-info">
                        <h5>{product.title}</h5>
                        <div className="cart-price">{product.price.price}تومان</div>
                        <span>تعداد: {product.qty}</span>
                        <CartItemForm id={product.id} />
                    </div>
                </li>
            )
        })
    )
}
export default CartItem;