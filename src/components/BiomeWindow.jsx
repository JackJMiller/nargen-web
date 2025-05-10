import ColourInput from "./ColourInput";
import ConfigInput from "./ConfigInput";
import TextBoxInput from "./TextBoxInput";
import "../styles/Window.css";

function BiomeWindow(props) {

    return (
        <div className="window-content">
            <div className="window-content-inner">
                <ColourInput name="Colour"/>
                <ConfigInput name="Ranges" type="number"/>
            </div>
        </div>
    );

}

export default BiomeWindow;
