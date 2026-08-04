import React from 'react'
import './App.css'
import logo from './assets/logo.jpeg'

const profiles = [
  { name: "SUDAIS", image: logo, intro: "This is Sudais Khan" },
  { name: "AYESHA", image: logo, intro: "Frontend developer & UI enthusiast" },
  { name: "HAMZA", image: logo, intro: "Backend engineer who loves clean APIs" },
  { name: "FATIMA", image: logo, intro: "Full-stack dev exploring React & Node" },
  { name: "ALI RAZA", image: logo, intro: "Learning web development one project at a time" },
  { name: "ZARA", image: logo, intro: "CS student passionate about design systems" },
]

function IntroCard(props){
  return (
    <div className="card">
      <img className="card-icon" src={props.image} alt="logo image"  />
      <h2 > {props.name} </h2>
      <p className="intro"> {props.intro} </p>

    </div>



  )
}



const App = () => {
  return (
    <div className="card-container">
      {profiles.map((profile, index) => (
        <IntroCard
          key={index}
          name={profile.name}
          image={profile.image}
          intro={profile.intro}
        />
      ))}

    </div>
  )
}

export default App