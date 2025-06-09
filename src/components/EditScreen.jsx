import { useState } from "react";

import Draggable from "./Draggable";
import BiomePane from "./BiomePane";
import SubBiomePane from "./SubBiomePane";
import WorldPane from "./WorldPane";

function EditScreen() {

    let [panes, setPanes] = useState([
        { type: "world", name: "World Config" },
        { type: "biome", name: "rainvalley" },
        { type: "sub-biome", name: "rainvalley.clusters" }
    ]);

    let renderPane = (pane) => {
        switch (pane.type) {
            case "world":
                return (
                    <Draggable x={ 0.1 * window.innerWidth } y={ 0.6 * window.innerHeight } dragBoxClassName="window-header">
                        <WorldPane name={ pane.name }/>
                    </Draggable>
                );
            case "biome":
                return (
                    <Draggable x={ 0.3 * window.innerWidth } y={ 0.6 * window.innerHeight } dragBoxClassName="window-header">
                        <BiomePane name={ pane.name }/>
                    </Draggable>
                );
            case "sub-biome":
                return (
                    <Draggable x={ 0.5 * window.innerWidth } y={ 0.6 * window.innerHeight } dragBoxClassName="window-header">
                        <SubBiomePane name={ pane.name }/>
                    </Draggable>
                );
        }
    };

    return (
        <>
            { panes.map((pane) => renderPane(pane)) }
        </>
    );

}

export default EditScreen;
