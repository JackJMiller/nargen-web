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
            <Window/>
        </>
    );

}

export default App;
