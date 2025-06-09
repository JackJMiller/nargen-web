import ConfigInput from "./ConfigInput";
import Pane from "./Pane";

import "../styles/Pane.css";
import { GRID_IMAGE_FILENAMES } from "../scripts/constants";

function WorldPane(props) {

    return (
        <Pane width="30rem" name={ props.name }>
            <div className="window-content">
                <div className="window-content-inner">
                    <ConfigInput name="Seed" type="number"/>
                    <ConfigInput name="Max height" type="number"/>
                    <ConfigInput name="Width" type="number"/>
                    <ConfigInput name="Height" type="number"/>
                    <ConfigInput name="Q" type="number"/>
                    <ConfigInput name="R" type="number"/>
                    <ConfigInput name="Biome size" type="number"/>
                    <ConfigInput name="Biomes" type="number"/>
                </div>
            </div>
        </Pane>
    );

}

export default WorldPane;
