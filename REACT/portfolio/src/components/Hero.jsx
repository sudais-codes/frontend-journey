import './Hero.css'
import profileImage from '../assets/logo.jpeg'

function Hero() {
  return (
    <section className="hero">
      <div className="text">
        <h3>WELCOME TO MY PROFILE</h3>
        <h1>
          Hi, I'm <span className="name">Sudais Khan</span> <br /> a web developer.
        </h1>
        <div className="btn">
          <button className="btnn">HIRE ME</button>
        </div>
      </div>

      <div className="image">
        <img src={profileImage} alt="profile" />
      </div>
    </section>
  )
}

export default Hero