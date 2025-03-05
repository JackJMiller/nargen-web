import TextBoxInput from "./TextBoxInput";
import "../styles/Window.css";

function Window() {
    return (
        <div id="world-window" class="window">
            <h2>Mundo</h2>
            <TextBoxInput name="Seed"/>
            <TextBoxInput name="Max height"/>
            <TextBoxInput name="Biome size"/>
        </div>
    );
}

export default Window;
