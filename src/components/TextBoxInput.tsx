import "../styles/TextBoxInput.css";

interface Props {
    name: string,
    type: string
}

function TextBoxInput({ name, type, ...props }: Props) {
    return (
        <>
            <input
                className="text-box-input"
                type={ type }
                placeholder={ name }
                { ...props }
                onChange={ ({ target: { value } }) => console.log(value) }
            />
        </>
    );
}

export default TextBoxInput;
