import "../styles/TextBoxInput.css";

interface Props {
    name: string
}

function TextBoxInput(props: Props) {
    return (
        <>
            <h3>{props.name}</h3>
            <input type="text" placeholder={props.name}/>
        </>
    );
}

export default TextBoxInput;
