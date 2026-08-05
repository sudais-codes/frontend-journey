import React from 'react'
import './App.css'
import logo from './assets/logo.jpeg'

const profiles = [
  { name: "SUDAIS", image: logo, intro: "This is Sudais Khan" },
  { name: "HAMZA", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFg9HPGDH-1fgmGAxJ10AbySbdkyXobuIEUoRb60pqxA&s=10", intro: "Frontend developer & UI enthusiast" ,
    width: "150px",
   },
  {
    name: "AYESHA",
     image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpTytKMACggztcOrhkzLi1kChfcRctyARVaMjJbnBdZA&s=10",
    intro: "Backend engineer who loves clean APIs",
    width: "150px",
    height: "150px",
    padding : "20px",
  },
  { name: "FATIMA", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCRwbSN955mFkD6DloTG5p924duBpzVk4tn299aRg1SA&s=10", intro: "Full-stack dev exploring React & Node" },
  { name: "ALI RAZA", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVm5VuDcJYjNeSVzrc1iYyEiqc-DMqYQyRxwE60VztFQ&s=10", intro: "Learning web development one project at a time" },
  { name: "ZARA", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9sAx8Uzwv1AUxBD9gcH4CinRyqxcogQ1VeamdS0SJ1Q&s=10", intro: "CS student passionate about design systems", 
    width: "150px",
   },
];

function IntroCard(props) {
  return (
    <div className="card">
      <img
        className="card-icon"
        src={props.image}
        alt="logo image"
        style={{
          width: props.width,
          height: props.height,
          padding  : props.padding,
        }}
      />
      <h2>{props.name}</h2>
      <p className="intro">{props.intro}</p>
    </div>
  );
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
  width={profile.width}
  height={profile.height}
/>
      ))}

    </div>
  )
}

export default App