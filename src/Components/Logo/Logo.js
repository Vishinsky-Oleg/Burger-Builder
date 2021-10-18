import React from "react";
import burgerLogo from "../../assets/images/28.1 burger-logo.png";
import classes from "./Logo.module.scss";

const Logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="Logo" />
        </div>
    );
};

export default Logo;
