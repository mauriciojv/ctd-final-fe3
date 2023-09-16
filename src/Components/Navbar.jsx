import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


function Navbar() {

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        
        setClicked(!clicked)
    }

    function alternarColor() {
      document.querySelector('#App').classList.toggle('dark')    
    }

  return (
    <div className='Nav'>
        
        <nav>
        <h2>Clinica Odontologica</h2>
        <ul className={`links ${clicked ? 'active' : ''}`}>
          <Link to={'/'} className='link' onClick={handleClick}>Home</Link>
          <Link to={'/favs'} className='link' onClick={handleClick} >Favs</Link>
          <Link to={'/contact'} className='link' onClick={handleClick} >Contact</Link>
        </ul>   
        </nav>  
        <button className='themeButton' onClick={alternarColor}>Theme</button>  

    </div>
  )
}

export default Navbar

