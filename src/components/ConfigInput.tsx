import TextBoxInput from "./TextBoxInput";
import "../styles/TextBoxInput.css";

interface Props {
    name: string,
    type: string
}

function ConfigInput(props: Props) {
    return (
        <>
            <h2>{ props.name }</h2>
            <TextBoxInput
                type={ props.type }
                name={ props.name }
            />
        </>
    );
}

export default ConfigInput;
