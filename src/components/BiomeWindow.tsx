import TextBoxInput from "./TextBoxInput";
import "../styles/Window.css";

interface Props {
    type: "world" | "biome",
    id: string
}

function BiomeWindow(props: Props) {

    return (
        <div className="window-content">
            <div className="window-content-inner">
                <TextBoxInput name="Seed"/>
                <TextBoxInput name="Max height"/>
                <TextBoxInput name="Width"/>
                <TextBoxInput name="Height"/>
                <TextBoxInput name="Biome size"/>
            </div>
        </div>
    );

}

export default BiomeWindow;
