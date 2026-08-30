import React from 'react'
import './Customer.css'

const Customer_data = [
    {
        id :1 ,
        name : "Maln Josi",
        discription : "I absolutly love my cal 876 plant it not only brightens up my workspace but also purifies the air. The smart care system makes maintenance effortiess, and its gorgeious",
    },

    {
        id : 2,
        name : "Alina Thakur",
        discription : "The cal 876 is a perfect blend of modern technology and nature. it fits beautifully into my home provides cleaner air and the app reminders ensure my plant is always well-cared for" ,
    },

    {
        id : 3,
        name : "Max Makvana" ,
        discription : "Im thrilled with the cal 876! its super easy to care for look amazing in my office and helps create a peaceful atmosphere. im definitely recommending it to friends!" ,
    },


]

const Customer = () => {
  return (
    <div  >
      <h3 className="cr-header">Customer Review</h3>
        <div className='cr-main-container' >
      {Customer_data.map((data) => (
        <div className="review" key={data.id} >
            <h3 className="name"> {data.name} </h3>
            <p> {data.discription} </p>
        </div>
      ))}
            </div>
    </div>
  )
}

export default Customer
