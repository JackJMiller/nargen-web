import "../styles/App.css";

function SurfaceView(props) {

    const style = {
        width: "fit-content",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)"
    };

    return (
        <div id="surface-layer" className="layer" style={ style }>
        </div>
    );
}

export default SurfaceView;
