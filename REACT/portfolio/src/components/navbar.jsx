import './navbar.css'
import logo from '../assets/logo.jpeg'
function navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                <img className="logo-image" src={logo} alt="logo" />
                <h3>SUDAIS</h3>
            </div>

            <ul className='nav-links'>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">BLOG</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
            
        </nav>
    )
}

export default navbar