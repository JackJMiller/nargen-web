import { useState } from "react";
import Canvas from "./components/Canvas";
import Header from "./components/Header";
import Window from "./components/Window";
import "./styles/App.css";

function App() {

    return (
        <>
            <Header/>
            <Canvas/>
            <Window
                id="world"
                name="World Config"
                x="10vw"
                y="40vh"
            />
            <Window
                id="biome"
                name="rainvalley"
                x="70vw"
                y="20vh"
            />
        </>
    );

}

export default App;
