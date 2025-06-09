import { useState } from "react";

import TextBoxInput from "./TextBoxInput";
import "../styles/Pane.css";

function Pane(props) {

    let windowStyle = {
        "display": "block",
        "background": "var(--colour-black-transparent)",
        "width": props.width,
        "border": "1rem solid yellow"
    };

    return (
        <div style={ windowStyle }>
            <h1 className="window-header">{ props.name }</h1>
            <div className="window-content">
                { props.children }
            </div>
        </div>
    );

}

export default Pane;
