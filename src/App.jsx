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
                type="world"
                name="World Config"
                x="10vw"
                y="40vh"
            />
            <Window
                type="biome"
                name="rainvalley"
                x="70vw"
                y="20vh"
            />
            <Window
                type="sub-biome"
                name="rainvalley.clusters"
                x="40vw"
                y="30vh"
            />
        </>
    );

}

export default App;
