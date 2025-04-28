import "../styles/TextBoxInput.css";

interface Props {
    name: string
}

function TextBoxInput(props: Props) {
    return (
        <>
            <h2>{props.name}</h2>
            <input
                className="text-box-input"
                type="text"
                placeholder={props.name}
                onChange={({ target: { value } }) => console.log(value)}
            />
        </>
    );
}

export default TextBoxInput;
