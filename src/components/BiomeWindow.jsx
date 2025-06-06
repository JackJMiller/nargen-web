import ColourInput from "./ColourInput";
import ConfigInput from "./ConfigInput";
import TextBoxInput from "./TextBoxInput";
import Window from "./Window";

import "../styles/Window.css";

function BiomeWindow(props) {

    return (
        <Window name={ props.name }>
            <div className="window-content">
                <div className="window-content-inner">
                    <ColourInput name="Colour"/>
                    <ConfigInput name="Ranges" type="number"/>
                </div>
            </div>
        </Window>
    );

}

export default BiomeWindow;
