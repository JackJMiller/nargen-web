import { MouseEvent, useState } from "react";

import BiomeWindow from "./BiomeWindow";
import WorldWindow from "./WorldWindow";
import TextBoxInput from "./TextBoxInput";
import "../styles/Window.css";

interface Props {
    id: "world" | "biome",
    title: string,
    x: string,
    y: string
}

function Window(props: Props) {

    let handleClick = (event: MouseEvent) => console.log(event);

    let content = (props.id === "world") ? <WorldWindow id={props.id}/> : <BiomeWindow id={props.id}/>
    
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
