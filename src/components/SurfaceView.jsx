import "../styles/App.css";

function SurfaceView(props) {

    const style = {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)"
    };

    return (
        <div id="surface-layer" className="layer" style={ style }>
        </div>
    );
}

export default SurfaceView;
