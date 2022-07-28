import './index.css'
import logo from "../../assets/logo.png"

const Navbar = () => {

    return (
        <div className="Navbar">
            <div className='logo_title'>  
            <img src={logo} alt="main-logo" className="logo"/>
            <h3 className="title">Social ExChange</h3>
            </div>
            <ul className='Navbar__list'>
                <li>Menu</li>
                <li>Friends</li>
                <li>Messages</li>
                <li className="log_out">Logout</li>
            </ul>
        </div>
    )
}

export default Navbar;