import { useEffect } from "react";

import Canvas from "./components/Canvas";
import Header from "./components/Header";
import Window from "./components/Window";
import "./styles/App.css";

const onMouseDown = (event) => {
    console.log("Mouse down:", event.clientX, event.clientY);
};

const onMouseUp = (event) => {
    console.log("Mouse up:", event.clientX, event.clientY);
};

function App() {

    useEffect(() => {
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
        return () => {
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
        };
    }, []);

    return (
        <>
            <Header/>
            <div id="surface-layer" className="layer">
                
            </div>
            <Window
                type="world"
                name="World Config"
                x="10vw"
                y="40vh"
            />
            <Window
                type="biome"
                name="rainvalley"
                x="70vw"
                y="10vh"
            />
            <Window
                type="sub-biome"
                name="rainvalley.clusters"
                x="70vw"
                y="50vh"
            />
        </>
    );

}

export default App;
