import ColourInput from "./ColourInput";
import ConfigInput from "./ConfigInput";
import TextBoxInput from "./TextBoxInput";
import Pane from "./Pane";

import "../styles/Pane.css";

function BiomePane(props) {

    return (
        <Pane width="30rem" name={ props.name }>
            <div className="window-content">
                <div className="window-content-inner">
                    <ColourInput name="Colour"/>
                    <ConfigInput name="Ranges" type="number"/>
                </div>
            </div>
        </Pane>
    );

}

export default BiomePane;
