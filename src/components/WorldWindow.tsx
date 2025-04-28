import TextBoxInput from "./TextBoxInput";
import "../styles/Window.css";

interface Props {
    type: "world" | "biome"
}

function WorldWindow(props: Props) {

    return (
        <div className="window-content">
            <div className="window-content-inner">
                <TextBoxInput name="Seed"/>
                <TextBoxInput name="Max height"/>
                <TextBoxInput name="Width"/>
                <TextBoxInput name="Height"/>
                <TextBoxInput name="Q"/>
                <TextBoxInput name="R"/>
                <TextBoxInput name="Biome size"/>
                <TextBoxInput name="Biomes"/>
            </div>
        </div>
    );

}

export default WorldWindow;
