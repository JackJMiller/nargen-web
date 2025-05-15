import { useState } from "react";

import World from "../scripts/World";
import { loadJSON, RENDERER, WORLD_NAME } from "../scripts/env_script";

import "../styles/TextBoxInput.css";

function TextBoxInput({ name, type, ...props }) {

    let [value, setValue] = useState("");

    const onKeyDown = function(event) {
        console.log("KEY DOWN", event.keyCode);
        if (event.keyCode === 13) {

            let world = new World(WORLD_NAME, WORLD_NAME);

            world.summarise();

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
