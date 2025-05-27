import { useState } from "react";

function Draggable(props) {

    let [x, setX] = useState(props.x);
    let [y, setY] = useState(props.y);
    let [mouseDown, setMouseDown] = useState(false);

    const onMouseDown = (event) => {
        setX(event.clientX);
        setY(event.clientY);
        setMouseDown(true);
        console.log(event.clientX);
        console.log(event.clientY);
    };

    const onMouseUp = (event) => {
        setMouseDown(false);
    };

    const onMouseMove = (event) => {
        event.preventDefault();
        if (!mouseDown) return;
        setX(event.clientX);
        setY(event.clientY);
    };

    const style = {
        position: "fixed",
        top: y,
        left: x,
        transform: "translate(-50%, -50%)"
    };

    return (
        <div onMouseDown={ onMouseDown } onMouseUp={ onMouseUp } onMouseMove={ onMouseMove } style={ style }>
            { props.children }
        </div>
    );

}

export default Draggable;
