import React, { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import Trendy_plants from './component/Trendy-plants/Trendy_plants'
import Top_selling, { Top_Selling_data } from './component/Top_selling/Top_selling'
import Customer from './component/Customer/Customer'
import About from './component/About/About'
import Footer from './component/Footer/Footer'
import SearchResultModal from './component/SearchResultModal/SearchResultModal'

const App = () => {
  // 1. Controlled search input state (updates as user types in Navbar)
  const [searchInput, setSearchInput] = useState("")

  // 2. Active search term state (updated when Search button is clicked)
  const [searchTerm, setSearchTerm] = useState("")

  // Trigger search action
  const handleSearch = () => {
    setSearchTerm(searchInput)
  }

  // Dismiss modal or message and reset search input & term
  const handleCloseSearch = () => {
    setSearchTerm("")
    setSearchInput("")
  }

  // 3. Find matched product in products array (case-insensitive substring match)
  const matchedProduct = searchTerm.trim() !== ""
    ? Top_Selling_data.find((plant) =>
        plant.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
      )
    : null

  // 4. Boolean flag: search term was submitted but no matching plant was found
  const noMatchFound = searchTerm.trim() !== "" && !matchedProduct

  return (
    <div>
      <Navbar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
      />
      <Hero />
      <Trendy_plants />
      <Top_selling />
      <Customer />
      <About />
      <Footer />

      {/* Render Modal Popup when a matching product is found */}
      {matchedProduct && (
        <SearchResultModal 
          product={matchedProduct} 
          onClose={handleCloseSearch} 
        />
      )}

      {/* Render 'No plant found' message when no match is found */}
      {noMatchFound && (
        <div className="no-plant-toast">
          <span>No plant found for "{searchTerm}"</span>
          <button 
            className="no-plant-toast-close" 
            onClick={handleCloseSearch}
            aria-label="Dismiss message"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  )
}

export default App