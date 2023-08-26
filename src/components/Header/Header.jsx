import './Header.css'


import logo from '../../images/logo.png'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const Header = ({menuVisibility, toggleMenu, setFindPageVisibility}) =>{
     const navigate = useNavigate()
     const [isGrey, setIsGrey] = useState(true)
    const handleMouseEnter = () => {
      setIsGrey(false)
     }
          
     const handleMouseLeave = () => {
      setIsGrey(true)
     }

    return(<>
   
      <div className='sticky-header'>
        <div className='menu-container'> 
          <div className='menu' id='menu'>
            <img className='menu-logo-image' src={logo} alt='logo'/>
            {menuVisibility ? 
            <div className='menu-a-container'> 
              <a onClick = {() =>navigate('/')}  className = 'menu-a'>HOME</a>
              <a onClick = {() =>navigate('/search')} className = 'menu-a'>RECIPES</a>
              <a onClick = {() =>navigate('/gallery')}className = 'menu-a'>PHOTO GALLERIES</a>
            </div> :<></>}
        
         <a  className = 'searcha'   onMouseEnter={handleMouseEnter} 
           onMouseLeave={handleMouseLeave}><button onClick = {() =>navigate('/search')} className='small-btn'  style={{ textDecoration: 'none' }}> 
           <FontAwesomeIcon icon = {faSearch}  
          
        
           style = {isGrey? {color: '#878787'}: {  color: 'white'}}
           
           /> FIND A RECIPE
            
           
           </button></a>
          </div>
          {!menuVisibility ? 
          <div className="burger" id='burger' onClick={() =>toggleMenu()}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div> :
          <div className="cross-container" id='cross'  onClick={() =>toggleMenu()}>
            <div className="cross"></div>
          </div>}
        </div>
      </div>
    </>)
}

/*
   <a className = 'menu-a'>PHOTO GALLERIES</a>
              <a onClick = {() =>navigate('/videos')} className = 'menu-a'>VIDEOS</a>
              <a className = 'menu-a'>ALL CATEGORIES</a>
*/