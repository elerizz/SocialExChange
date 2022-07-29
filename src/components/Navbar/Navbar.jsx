import './index.css'
import logo from "../../assets/logo.png"
import Button from '../Button';

const Navbar = ({setSplashscreenVisibility}) => {

    return (
        <div className="Navbar">
            <div className='logo_title'>  
            <img src={logo} alt="main-logo" className="logo"/>
            <h3 className="title">Social ExChange</h3>
            </div>
            <ul className='Navbar__list'>
                <li>Friends</li>
                <li>Messages</li>
                <li className="navbar_username">{localStorage.getItem("username")}</li>
                <li className="log_out"><Button textContent="Logout" onClick={() => {localStorage.removeItem("username"); setSplashscreenVisibility(true)}}/></li>
            </ul>
        </div>
    )
}

export default Navbar;