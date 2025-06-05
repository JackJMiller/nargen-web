import { useState } from "react";

import Draggable from "./components/Draggable";
import EditScreen from "./components/EditScreen";
import Header from "./components/Header";
import PanesScreen from "./components/PanesScreen";
import SurfaceView from "./components/SurfaceView";
import "./styles/App.css";

function App() {

    const [screen, setScreen] = useState("panes");

    return (
        <>
            <Header setScreen={ setScreen }/>
            <div id="body">

                <Draggable x={ window.innerWidth / 2 } y={ window.innerHeight / 2 } dragBoxClassName="layer">
                    <SurfaceView/>
                </Draggable>

                { screen === "edit" && <EditScreen/> }

                { screen === "panes" && <PanesScreen setScreen={ setScreen }/> }

            </div>
        </>
    );

}

export default App;
