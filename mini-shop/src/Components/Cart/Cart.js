import CartItem from "./CartItem";

const Cart = (props) => {
    return (
        <div className="shopping-cart">
            <ul>
                <CartItem
                    key={props.id}
                    name={props.title}
                    price={props.price}
                    image={props.img}
                    qty={props.count}
                />
            </ul>
            <button className="close-cart" onClick={props.onClose}>X</button>
        </div>
    )
}
export default Cart;