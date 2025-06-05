import "../styles/Header.css";

function HeaderCentre(props) {
    return (
        <div id="header-centre">
            <div id="header-centre-inner">

                <button className="header-button" onClick={ () => console.log("Open") }>
                    Open
                </button>

                <button className="header-button" onClick={ () => console.log("Save") }>
                    Save
                </button>

                <button className="header-button" onClick={ () => console.log("Export") }>
                    Export
                </button>

                <button className="header-button" onClick={ () => props.setScreen("panes") }>
                    Panes
                </button>

                <button className="header-button" onClick={ () => console.log("Settings") }>
                    Settings
                </button>

                <button className="header-button" onClick={ () => console.log("Help") }>
                    Help
                </button>

            </div>
        </div>
    );
}

export default HeaderCentre;
