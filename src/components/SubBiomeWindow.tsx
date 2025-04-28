import TextBoxInput from "./TextBoxInput";
import "../styles/Window.css";

interface Props {
    type: string
}

function SubBiomeWindow(props: Props) {

    return (
        <div className="window-content">
            <div className="window-content-inner">
                <TextBoxInput name="Colour"/>
                <TextBoxInput name="Altitude Surfaces"/>
                <TextBoxInput name="Ornaments"/>
                <TextBoxInput name="Amplitudes"/>
                <TextBoxInput name="Height Multiplier"/>
                <TextBoxInput name="Height Displacement"/>
                <TextBoxInput name="Blend"/>
            </div>
        </div>
    );

}

export default SubBiomeWindow;
