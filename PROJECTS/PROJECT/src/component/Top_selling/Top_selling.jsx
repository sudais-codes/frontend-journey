import React, { useEffect } from 'react'
import './Top_selling.css'
import ai_plant from '../../assets/ai_plant.png'
import cal from '../../assets/cal.png'
import calat from '../../assets/calat.png'
import calathea from '../../assets/calathea.png'
import desk from '../../assets/desk.png'
import show from '../../assets/show.png'
export const Top_Selling_data  = [
    {
        id : 1,
        image : calathea ,
        title : "Calathea Plant",
        discription : "Vibrant pet-friendly plant with stunning, patterned tropical leaves",
        price : "Rs. 309/-",
    },
    {
        id : 2,
        image : desk ,
        title : "Desk plant",
        discription : "Stylish compact plant for calm and creative desks",
        price : "Rs. 359/-",
    },
    {
        id : 3,
        image :ai_plant ,
        title : "Calathea ai plant",
        discription : "Know for its large, oval leaves with a unique pattern",
        price : "Rs. 399/-",
    },
    {
        id : 4,
        image : cal ,
        title : "Cal 874 plant",
        discription : "Cal 874 enhances air, mood, and minimal decor",
        price : "Rs. 259/-",
    },
    {
        id : 5,
        image : show ,
        title : "Show Plant",
        discription : "Bold, elegant plant designed to impress and inspire",
        price : "Rs. 759/-",
    },
    {
        id : 6,
        image : calat ,
        title : "Calat O2 plant",
        discription : "Smart air-purifying plant that brings calm and greenery",
        price : "Rs. 659/-",
    },
]

const Top_selling = () => {
  return (
    <div className='ts-main-container'>
      <div className="ts-header-wrapper">
        <h3 className="ts-header">Our Top Selling</h3>
      </div>

      <div className="selling_grid">
        {Top_Selling_data.map((selling) => (
          <div className="selling_card" key={selling.id}>
            <div className="selling_image">
              <img src={selling.image} alt={selling.title} />
            </div>
            <div className="selling_title">
              <h4>{selling.title}</h4>
              <p>{selling.discription}</p>
            </div>
            <div className="selling_footer">
              <span className="selling_price">{selling.price}</span>
              <button className="selling_cart-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Top_selling
