import "../styles/Header.css";

function Header() {
    return (
        <div id="header">
            <h1 class="logo">NarGen</h1>
            <div id="header-centre">
                <div id="header-centre-inner">
                    <button class="header-button">File</button>
                    <button class="header-button">Window</button>
                    <button class="header-button">Settings</button>
                    <button class="header-button">Help</button>
                </div>
            </div>
            <div id="header-right">
                <button class="header-button">Donate</button>
                <button class="header-button">About</button>
            </div>
        </div>
    );
}

export default Header;
