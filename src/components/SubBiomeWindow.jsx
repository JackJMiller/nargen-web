import ColourInput from "./ColourInput";
import ConfigInput from "./ConfigInput";
import Window from "./Window";

import "../styles/Window.css";

function SubBiomeWindow(props) {

    return (
        <Window name={ props.name }>
            <div className="window-content">
                <div className="window-content-inner">
                    <ColourInput name="Colour"/>
                    <ConfigInput name="Altitude Surfaces" type="number"/>
                    <ConfigInput name="Ornaments" type="number"/>
                    <ConfigInput name="Amplitudes" type="number"/>
                    <ConfigInput name="Height Multiplier" type="number"/>
                    <ConfigInput name="Height Displacement" type="number"/>
                    <ConfigInput name="Blend" type="number"/>
                </div>
            </div>
        </Window>
    );

}

export default SubBiomeWindow;
