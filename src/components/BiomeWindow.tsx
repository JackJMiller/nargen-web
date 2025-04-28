import TextBoxInput from "./TextBoxInput";
import "../styles/Window.css";

interface Props {
    type: "world" | "biome",
    type: string
}

function BiomeWindow(props: Props) {

    return (
        <div className="window-content">
            <div className="window-content-inner">
                <TextBoxInput name="Colour"/>
                <TextBoxInput name="Ranges"/>
            </div>
        </div>
    );

}

export default BiomeWindow;
