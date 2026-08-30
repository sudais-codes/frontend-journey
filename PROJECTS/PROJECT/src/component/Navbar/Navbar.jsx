import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = ({ searchInput, setSearchInput, handleSearch }) => {
  // Smooth scroll handler function
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav>
      <div className='logo'>
        <img src={logo} alt="" />
        <h3>Planto.</h3>
      </div>
      <div className='links'>
        <ul>
          <li onClick={() => scrollToSection('home')}>HOME</li>
          <li onClick={() => scrollToSection('about')}>ABOUT</li>
          <li onClick={() => scrollToSection('contact')}>CONTACT</li>
        </ul>
      </div>
 <div className="navbar__search-group">
  <input
    className='input'
    type="text"
    placeholder='Search'
    value={searchInput}
    onChange={(e) => setSearchInput(e.target.value)}
    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
  />
  <button className="search-btn" onClick={handleSearch}>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  </button>
</div>
    </nav>
  )
}

export default Navbar