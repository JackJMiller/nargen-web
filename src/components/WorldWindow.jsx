import ConfigInput from "./ConfigInput";
import "../styles/Window.css";

function WorldWindow(props) {

    return (
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
    );

}

export default WorldWindow;
