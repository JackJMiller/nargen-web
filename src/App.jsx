import Canvas from "./components/Canvas";
import Draggable from "./components/Draggable";
import Header from "./components/Header";
import SurfaceView from "./components/SurfaceView";
import Window from "./components/Window";
import "./styles/App.css";

function App() {

    return (
        <>
            <Header/>
            <div id="body">

                <Draggable x={ window.innerWidth / 2 } y={ window.innerHeight / 2 } dragBoxClassName="layer">
                    <SurfaceView/>
                </Draggable>

                <Draggable x={ 0.1 * window.innerWidth} y={ 0.6 * window.innerHeight } dragBoxClassName="window-header">
                    <Window type="world" name="World Config"/>
                </Draggable>

                <Draggable x={ 0.3 * window.innerWidth } y={ 0.6 * window.innerHeight } dragBoxClassName="window-header">
                    <Window type="biome" name="rainvalley"/>
                </Draggable>

                <Draggable x={ 0.5 * window.innerWidth } y={ 0.6 * window.innerHeight } dragBoxClassName="window-header">
                    <Window type="sub-biome" name="rainvalley.clusters"/>
                </Draggable>

            </div>
        </>
    );

}

export default App;
