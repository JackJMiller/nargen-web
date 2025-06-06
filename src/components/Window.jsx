import { useState } from "react";

import TextBoxInput from "./TextBoxInput";
import "../styles/Window.css";

function Window(props) {

    return (
        <div className="window">
            <h1 className="window-header">{ props.name }</h1>
            <div className="window-content">
                { props.children }
            </div>
        </div>
    );

}

export default Window;
