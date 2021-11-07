import CartItem from "./CartItem";

const Cart = (props) => {
    return (
        <ul className="shopping-cart">
            <CartItem name="cream" price="156000" />
        </ul>
    )
}
export default Cart;