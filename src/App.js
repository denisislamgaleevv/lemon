 
import {React, useState, useEffect} from 'react';
 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css';
import avatar from './images/avatar.png';
import './slider/gallery.min.css';
import './slider/gallery.theme.css';
import './slider/gallery.css';

import logo from './images/logo.png';
import signature from './images/signature.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faBarChart } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
 
import Slider from "react-slick";
import { RecipesSlider } from './components/RecipesSlider/RecipesSlider';
import { Recipe } from './components/Recipe/Recipe';
import { Preview } from './components/Preview/Preview';
import { Header } from './components/Header/Header';
import { FindPage } from './components/FindPage/FindPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Videos } from './components/Videos/Videos';
import { Footer } from './components/Footer/Footer';
import { PhotoGallery } from './components/PhotoGallery/PhotoGallery';
function App() {
   const [findPageVisibility, setFindPageVisibility] = useState(false)
   const [menuVisibility, setMenuVisibility] = useState(false)
   const [isChosenRecipe, setIsChosenRecipe]= useState(false)
   function toggleMenu(){
      
         setMenuVisibility(!menuVisibility)
   }
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const [tRecipe, setTRecipe] = useState([]);
  useEffect(() => {
   if (windowWidth > 600)
      setMenuVisibility(true)
   else
   setMenuVisibility(false)
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);  
   

  return (
    <div className="App">
       <div className='big-logo-wrapper'>
        <img src={logo} alt='logo' width={'200px'}   />
      </div>
      <Routes>
      <Route path = '/gallery' element = {
      <> 
       <Header menuVisibility = {menuVisibility} toggleMenu = {toggleMenu}
      setFindPageVisibility = {setFindPageVisibility}
    />
      <PhotoGallery tRecipe = {tRecipe}  setTRecipe = {setTRecipe} />
      </>
      }/>
      <Route path = {`/recipe-${tRecipe.strMeal}`} element = {
      <>  
        <Header menuVisibility = {menuVisibility} toggleMenu = {toggleMenu}
        setFindPageVisibility = {setFindPageVisibility}
      />
      <Recipe tRecipe={tRecipe}/>
      
      </>
      }/>



        <Route path='/search' element = {<> 
        <Header menuVisibility = {menuVisibility} toggleMenu = {toggleMenu}
        setFindPageVisibility = {setFindPageVisibility}
      />
      <FindPage tRecipe = {tRecipe}  setTRecipe = {setTRecipe} setFindPageVisibility = {setFindPageVisibility}/>  
      </>} />
          <Route path = '/' element = {<> 
      <Header menuVisibility = {menuVisibility} toggleMenu = {toggleMenu}
      setFindPageVisibility = {setFindPageVisibility}
      />
      
      
      <div className='all-container'>  
         <Preview/>
       <RecipesSlider windowWidth = {windowWidth}
       setTRecipe = {setTRecipe}
       setIsChosenRecipe = {setIsChosenRecipe}
       />

        
        <div className='cards'>
         
          <div className='author'>
            <h4>&nbsp;&nbsp;Author</h4>
            <div className='author-flex-container'> 
              <div className='author-photo-container'>
                <div className='author-round'> 
                <img className='avatar' src='https://malinois.com.ua/wp-content/uploads/2022/02/DSC_0012.jpg' alt='avatar'/>
                </div>
              </div>
              <div className='author-info-container'>  
                <div>  
                  <h3>Karen Gray</h3>
                  <p>United States</p>
                  <p className='author-icons'>
                    <i className="fa fa-google" aria-hidden="true"></i>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <i className="fa fa-telegram" aria-hidden="true"></i>
                  </p>
                </div>
                <p className='author-line'></p>
                <h5>About Lemon</h5>
                <p>Over the fifteen-year life span of Food.com, we’ve learned that – in addition to eating – sharing is what you do best. And thanks to the 20 million of you who come here each month, we now have 500,000 recipes to show for it, more than anywhere else in the digital universe. We also have tons crazy-tempting photos, troves of recipe reviews and more than 2 million Facebook likes. That’s a heck of a lot of Food. Thank you!</p>
                <div className='signature-container'> 
                  <img className='signature' src={signature} alt='signature'/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
           
        </footer>
      </div>
      </>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
