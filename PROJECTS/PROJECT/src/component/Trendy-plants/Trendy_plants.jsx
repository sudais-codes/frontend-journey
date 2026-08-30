import React from 'react'
import './Trendy_plants.css'
import small_disk from '../../assets/small-disk.png'
import windows from '../../assets/window-image.png'

const trendyPlantsData = [
  {
    id: 1,
    image: small_disk,
    title: "For Small Desk Ai Plant",
    description: "Enhance your workspace with the Small Desk AI Plant, a perfect blend of nature and technology. Bring nature to your desk and experience a refreshing, stress-free environment!",
    price: "Rs. 599 /-",
  },
  {
    id: 2,
    image: windows,
    title: "Window Plant",
    description: "Enhance your workspace with the Small Desk AI Plant, a perfect blend of nature and technology. Bring nature to your desk and experience a refreshing, stress-free environment!",
    price: "Rs. 399 /-",
  },
]
 
const Trendy_plants = () => {
  return (
    <div className='trendy-plants'>
      <h3 className='trendy-plants-header'>Our Trendy Plants</h3>

      {trendyPlantsData.map((plant) => (
        <div className="trendy-card" key={plant.id}>
          <div className="trendy-card__image">
            <img src={plant.image} alt={plant.title} />
          </div>
          <div className="trendy-card__content">
            <h3>{plant.title}</h3>
            <p>{plant.description}</p>
            <span className="trendy-card__price">{plant.price}</span>
            <div className="trendy-card__actions">
              <button className="btn">Buy Now</button>2
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Trendy_plants