import MenuShoppingCartIcon from '../../assets/Cart.png'

const HeaderCartButton = props => {

    return (
        <button onClick={props.onShowCart} className="button">
            <span className="cart-icon"><img src={MenuShoppingCartIcon} alt="icon" /></span>
            <span className="badge">3</span>
        </button>
    )
}

export default HeaderCartButton;