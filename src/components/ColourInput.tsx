import TextBoxInput from "./TextBoxInput";

interface Props {
    name: string,
    type: string
}

function ColourInput(props: Props) {
    return (
        <>
            <h2>{ props.name }</h2>
            <div className="grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridGap: "1rem" }}>
                <TextBoxInput name="Red" type="number" min={ 0 } max={ 255 }/>
                <TextBoxInput name="Green" type="number" min={ 0 } max={ 255 }/>
                <TextBoxInput name="Blue" type="number" min={ 0 } max={ 255 }/>
            </div>
        </>
    );
}

export default ColourInput;
