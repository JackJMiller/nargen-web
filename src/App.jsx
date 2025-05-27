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

                <Draggable x={ window.innerWidth / 2 } y={ window.innerHeight / 2 }>
                    <SurfaceView/>
                </Draggable>

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
            </div>
        </>
    );

}

export default App;
