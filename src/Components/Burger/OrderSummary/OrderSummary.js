import React from "react";
import Button from "../../UI/Button/Button";

class OrderSummary extends React.Component {
    //This could be functional component
    componentDidUpdate() {
        console.log("order summary will update");
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(
            (igKey, index) => (
                <li key={igKey + index}>
                    <span style={{ textTransform: "capitalize" }}>{igKey}</span>
                    : {this.props.ingredients[igKey]}
                </li>
            )
        );

        return (
            <>
                <h3>Your order</h3>
                <p>A delicious burger with following ingridients</p>
                <ul>{ingredientSummary}</ul>
                <p>
                    <strong>Total price: {this.props.price.toFixed(2)}$</strong>
                </p>
                <p>Continue to Checkout?</p>
                <Button
                    btnType="Danger"
                    clicked={this.props.purchaseCancelHandler}>
                    CANCEL
                </Button>
                <Button
                    btnType="Success"
                    clicked={this.props.purchaseContinueHandler}>
                    CONTINUE
                </Button>
            </>
        );
    }
}

export default OrderSummary;
