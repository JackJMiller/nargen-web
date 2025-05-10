import "../styles/TextBoxInput.css";

function TextBoxInput({ name, type, ...props }) {
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
