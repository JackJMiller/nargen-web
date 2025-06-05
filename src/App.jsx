import { useState } from "react";

import Draggable from "./components/Draggable";
import EditScreen from "./components/EditScreen";
import Header from "./components/Header";
import SurfaceView from "./components/SurfaceView";
import "./styles/App.css";

function App() {

    const [screen, setScreen] = useState("edit");

    return (
        <>
            <Header/>
            <div id="body">

                <Draggable x={ window.innerWidth / 2 } y={ window.innerHeight / 2 } dragBoxClassName="layer">
                    <SurfaceView/>
                </Draggable>

                <EditScreen/>

            </div>
        </>
    );

}

export default App;
