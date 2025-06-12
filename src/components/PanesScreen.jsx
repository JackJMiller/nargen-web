import Draggable from "./Draggable";
import Menu from "./Menu";

import "../styles/Menu.css";

function PanesScreen(props) {

    return (
        <Menu setScreen={ props.setScreen }>
            <h1>Panes</h1>
            {
                props.panes.map((pane, index) => {
                    if (pane.type === "sub-biome") return;
                    return (
                        <div key={ index} className="menu-select-container">
                            <h2>{ pane.name }</h2>
                            <input type="checkbox" onChange={ (e) => props.setPaneVisibility(index, e.target.checked) } checked={ pane.visible }/>
                        </div>
                    );
                })
            }
        </Menu>
    );

}

export default PanesScreen;
