import "../styles/Header.css";
import HeaderCentre from "./HeaderCentre";

function Header(props) {
    return (
        <div id="header">
            <h1 className="logo">NarGen</h1>
            <HeaderCentre setScreen={ props.setScreen }/>
            <div id="header-right">
                <button className="header-button">Donate</button>
                <button className="header-button">About</button>
            </div>
        </div>
    );
}

export default Header;
