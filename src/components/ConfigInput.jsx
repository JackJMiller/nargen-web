import TextBoxInput from "./TextBoxInput";
import "../styles/TextBoxInput.css";

function ConfigInput(props) {

    return (
        <>
            <h2>{ props.name }</h2>
            <TextBoxInput
                type={ props.type }
                name={ props.name }
                onKeyDown={ props.onKeyDown }
            />
        </>
    );
}

export default ConfigInput;
