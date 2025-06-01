import { useState } from "react";

function Draggable(props) {

    let [x, setX] = useState(props.x);
    let [y, setY] = useState(props.y);
    let [mouseDown, setMouseDown] = useState(false);

    const onMouseDown = (event) => {
        if (props.dragBoxClassName === undefined) {
            setX(event.clientX);
            setY(event.clientY);
            setMouseDown(true);
        }
        else if (props.dragBoxClassName === event.target.className) {
            setX(event.clientX - event.target.clientWidth / 2);
            setY(event.clientY - event.target.clientHeight / 2);
            setMouseDown(true);
        }
    };

    const onMouseUp = (event) => {
        setMouseDown(false);
    };

    const onMouseMove = (event) => {
        event.preventDefault();
        if (!mouseDown) return;
        if (props.dragBoxClassName === undefined) {
            setX(event.clientX);
            setY(event.clientY);
        }
        else {
            setX(event.clientX - event.target.clientWidth / 2);
            setY(event.clientY - event.target.clientHeight / 2);
        }
    };

    const style = {
        position: "fixed",
        top: y,
        left: x
    };

    return (
        <div onMouseDown={ onMouseDown } onMouseUp={ onMouseUp } onMouseMove={ onMouseMove } style={ style }>
            { props.children }
        </div>
    );

}

export default Draggable;
