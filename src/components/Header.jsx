import "../styles/Header.css";

function Header() {
    return (
        <div id="header">
            <h1 className="logo">NarGen</h1>
            <div id="header-centre">
                <div id="header-centre-inner">
                    <button className="header-button">File</button>
                    <button className="header-button">Window</button>
                    <button className="header-button">Settings</button>
                    <button className="header-button">Help</button>
                </div>
            </div>
            <div id="header-right">
                <button className="header-button">Donate</button>
                <button className="header-button">About</button>
            </div>
        </div>
    );
}

export default Header;
