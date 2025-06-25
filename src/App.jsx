import { useState } from "react";

import Draggable from "./components/Draggable";
import EditScreen from "./components/EditScreen";
import Header from "./components/Header";
import PanesScreen from "./components/PanesScreen";
import SurfaceView from "./components/SurfaceView";

import { RECOGNISED_BIOME_ATTRIBUTES } from "./scripts/constants";
import { FILESYSTEM, generate } from "./scripts/env_script";

import "./styles/App.css";

function App() {

    let determinePaneType = (paneName) => {
        let split = paneName.split("/");
        return (split[1] === "biomes") ? "biome" : "world";
    };

    let deriveSubBiomePanes = (biomeConfig) => {
        let names = Object.keys(biomeConfig);
        names = names.filter((name) => !RECOGNISED_BIOME_ATTRIBUTES.includes(name));
        return names.map((name) => { return { type: "sub-biome", name: name, visible: false } });
    };

    let derivePanes = () => {
        let output = [];
        let filenames = Object.keys(FILESYSTEM);
        for (let filename of filenames) {
            let type = determinePaneType(filename);
            output.push({ type, name: filename, visible: (type === "world") });
            if (type === "biome") {
                output = output.concat(deriveSubBiomePanes(FILESYSTEM[filename]));
            }
        }
        return output;
    };

    let setPaneVisibility = (index, visible) => {
        panes[index].visible = visible;
        setPanes(panes);
    };

    let [panes, setPanes] = useState(derivePanes());

    let [screen, setScreen] = useState("panes");

    return (
        <>
            <Header setScreen={ setScreen }/>
            <div id="body">

                <Draggable x={ window.innerWidth / 2 } y={ window.innerHeight / 2 } dragBoxClassName="layer">
                    <SurfaceView/>
                </Draggable>

                <EditScreen panes={ panes } />

                { screen === "panes" && <PanesScreen setScreen={ setScreen } panes={ panes } setPaneVisibility={ setPaneVisibility }/> }

            </div>
        </>
    );

}

export default App;
