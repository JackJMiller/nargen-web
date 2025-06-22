import "../styles/Menu.css";

function Menu({ setScreen, ...props }) {

    return (
        <div>
            <div className="menu-backdrop" onClick={ () => setScreen("edit") }></div>
            <div className="menu">
                <div className="menu-inner">
                    { props.children }
                </div>
            </div>
        </div>
    );

}

export default Menu;
