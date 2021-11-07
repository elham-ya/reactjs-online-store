import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import Input from "../UI/Input";
import { addToCart } from '../../Actions/cartAction'

const CartItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const dispatch = useDispatch();
    const amountInputRef = useRef();

    const addToCartHandler = () => {

    }

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        }

        dispatch(addToCart(props.id, enteredAmountNumber))
    };

    return (
        <form className="product-count" onSubmit={submitHandler}>
            <button className="decrease">-</button>
            <Input
                ref={amountInputRef}
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '10',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button className="increase">+</button>
        </form>
    )
}

export default CartItemForm;