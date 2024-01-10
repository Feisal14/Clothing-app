import React from "react";
import "./button.scss";

const BUTTON_TYPES_CLASSES  = {
google: 'google-sign-in',
inverted: 'inverted',
}


const button = ({ children, buttonType, ...otherProps}) => {
  return <button className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`} {...otherProps}>{children}</button>;
};

export default button;
