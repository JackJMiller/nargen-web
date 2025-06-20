import "../styles/Menu.css";

function Menu(props) {

    return (
        <div>
            <div className="menu-backdrop" onClick={ () => props.setScreen("edit") }></div>
            <div className="menu">
                <div className="menu-inner">
                    { props.children }
                </div>
            </div>
        </div>
    );

}

export default Menu;
