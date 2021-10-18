import React from "react";
import { withRouter } from "react-router";
import classes from "./Burger.module.scss";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
    console.log(props);
    let transformedIngredient = Object.keys(props.ingredients)
        .map((ing) => {
            return [...Array(props.ingredients[ing])].map((_, i) => (
                <BurgerIngredient key={ing + i} type={ing} />
            ));
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredient.length === 0 ? (
                <p>Please add some ingredients</p>
            ) : (
                transformedIngredient
            )}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default withRouter(Burger);
