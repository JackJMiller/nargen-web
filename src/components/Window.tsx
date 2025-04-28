import { MouseEvent, useState } from "react";

import BiomeWindow from "./BiomeWindow";
import SubBiomeWindow from "./SubBiomeWindow";
import WorldWindow from "./WorldWindow";
import TextBoxInput from "./TextBoxInput";
import "../styles/Window.css";

interface Props {
    type: "world" | "biome" | "sub-biome",
    title: string,
    x: string,
    y: string
}

function Window(props: Props) {

    let handleClick = (event: MouseEvent) => console.log(event);

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
        <div style={{ left: props.x, top: props.y }} className="window">
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
