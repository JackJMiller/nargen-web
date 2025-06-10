import { useState } from "react";

import Draggable from "./Draggable";
import BiomePane from "./BiomePane";
import SubBiomePane from "./SubBiomePane";
import WorldPane from "./WorldPane";

import { RECOGNISED_BIOME_ATTRIBUTES } from "../scripts/constants";
import { FILESYSTEM } from "../scripts/env_script";

function EditScreen() {

    let determinePaneType = (paneName) => {
        let split = paneName.split("/");
        return (split[1] === "biomes") ? "biome" : "world";
    };

    let deriveSubBiomePanes = (biomeConfig) => {
        let names = Object.keys(biomeConfig);
        names = names.filter((name) => !RECOGNISED_BIOME_ATTRIBUTES.includes(name));
        return names.map((name) => { return { type: "sub-biome", name: name } });
    };

    let derivePanes = () => {
        let output = [];
        let filenames = Object.keys(FILESYSTEM);
        for (let filename of filenames) {
            let type = determinePaneType(filename);
            output.push({ type, name: filename });
            if (type === "biome") {
                output = output.concat(deriveSubBiomePanes(FILESYSTEM[filename]));
            }
        }
        return output;
    };

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

    let [panes, setPanes] = useState(derivePanes());

    return (
        <>
            { panes.map((pane) => renderPane(pane)) }
        </>
    );

}

export default EditScreen;
