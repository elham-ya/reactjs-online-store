import { useRef, useState } from 'react'
import Input from "../Components/UI/Input";

const CartItemForm = (props) => {

    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = event => {
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

        props.onAddToCart(enteredAmountNumber);
    }


    return (
        <form onSubmit={submitHandler} className="product-count">
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