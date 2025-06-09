import React from 'react'
import laughingDuck from "../assets/laughing-duck.png"

const Header = () => {
  return (
    <header className="header">
        <img className="laughing-duck" src={laughingDuck} alt="Laughing Duck" />
        <h1>Meme Generator</h1>
    </header>
  )
}

export default Header
