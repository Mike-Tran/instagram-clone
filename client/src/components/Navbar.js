import instagram_logo from "../assets/instagram_logo.png"
import '../styles/Navbar.css';

function Navbar({user}) {
    return (
        <div className="navbar-container">
            <div className="navbar-logo">
                <img src={instagram_logo} alt="instagram logo"></img>
            </div>
            <div className="navbar-search">
                <input type="text"></input>
            </div>
            <div className="navbar-buttons">
                <h2>{user ? user.username : ' '}</h2>
            </div>

        </div>
    )
}

export default Navbar;