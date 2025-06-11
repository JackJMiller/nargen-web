import Draggable from "./Draggable";
import Menu from "./Menu";

function PanesScreen(props) {

    return (
        <Menu setScreen={ props.setScreen }>
            <h1>Panes</h1>
            {
                props.panes.map((pane) => (
                    <h1>{ pane.name }</h1>
                ))
            }
        </Menu>
    );

}

export default PanesScreen;
