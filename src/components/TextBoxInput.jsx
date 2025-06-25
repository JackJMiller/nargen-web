import { useState } from "react";

import World from "../scripts/World";
import { generate } from "../scripts/env_script";

import "../styles/TextBoxInput.css";

function TextBoxInput({ name, type, ...props }) {

    let [value, setValue] = useState("");

    const onKeyDown = function(event) {
        if (event.keyCode === 13) {
            document.getElementById("surface-layer").innerHTML = "";
            generate();
        }
    };

    return (
        <>
            <input
                className="text-box-input"
                type={ type }
                placeholder={ name }
                onChange={ event => setValue(event.target.value) }
                onKeyDown={ event => onKeyDown(event) }
            />
        </>
    );
}

export default TextBoxInput;
