import { useState } from "react";

import BiomeWindow from "./BiomeWindow";
import SubBiomeWindow from "./SubBiomeWindow";
import WorldWindow from "./WorldWindow";
import TextBoxInput from "./TextBoxInput";
import "../styles/Window.css";

function Window(props) {

    let content;
    switch (props.type) {
        case "world":
            content = <WorldWindow type={props.type}/>;
            break;
        case "biome":
            content = <BiomeWindow type={props.type}/>;
            break;
        case "sub-biome":
            content = <SubBiomeWindow type={props.type}/>;
            break;
    }
    
    return (
        <div className="window">
            <div className="window-header">
                <h1>{ props.name }</h1>
            </div>
            <div className="window-content">
                { content }
            </div>
        </div>
    );

}

export default Window;
