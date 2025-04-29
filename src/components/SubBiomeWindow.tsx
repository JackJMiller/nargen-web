import ColourInput from "./ColourInput";
import ConfigInput from "./ConfigInput";
import "../styles/Window.css";

interface Props {
    type: string
}

function SubBiomeWindow(props: Props) {

    return (
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
    );

}

export default SubBiomeWindow;
