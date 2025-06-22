import { useEffect } from "react";

import Menu from "./Menu";

import "../styles/Menu.css";

function PanesScreen({ setPaneVisibility, setScreen, ...props }) {

    useEffect(() => {
        props.panes.forEach((pane, index) => {
            if (pane.type === "sub-biome") return;
            document.getElementById(`panes-select-${index}`).checked = pane.visible;
        });
    });

    return (
        <Menu setScreen={ setScreen }>
            <h1>Panes</h1>
            {
                props.panes.map((pane, index) => {
                    if (pane.type === "sub-biome") return;
                    return (
                        <div key={ index} className="menu-select-container">
                            <h2>{ pane.name }</h2>
                            <input
                                id={ `panes-select-${index}` }
                                type="checkbox"
                                onChange={ (e) => { setPaneVisibility(index, e.target.checked); } }
                            />
                        </div>
                    );
                })
            }
        </Menu>
    );

}

export default PanesScreen;
