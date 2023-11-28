import {React, useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faCarrot } from '@fortawesome/free-solid-svg-icons'
import smallRecipePhoto1 from './images/small-recipes/small-recipes-photo-1.jpg';
import smallRecipePhoto2 from './images/small-recipes/small-recipes-photo-2.jpg';
import smallRecipePhoto3 from './images/small-recipes/small-recipes-photo-3.jpg';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import './RecipesSlider.css';
export const RecipesSlider =( {windowWidth, setTRecipe, setIsChosenRecipe} )=> {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  const [meals, setMeals] = useState([])
  async function logRecipes() {
    try {
      const randomMeals = [];
      
      for (let i = 0; i < 4; i++) {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();
        randomMeals.push(data.meals[0]);
      }
      
      setMeals(randomMeals);
    } catch (error) {
      console.error('Error fetching random recipes:', error);
    }
  
  }
  useEffect(()=>{
     logRecipes();  

  }, [])
  const handleNavigateToRecipe = (elem) => {
    setTRecipe(elem)
    setIsChosenRecipe(true)
    navigate(`/recipe-${elem.strMeal}`)
  };

  return (
    <div className='small-recipes-wrapper'>
  
    <div className='small-recipes'>
      <h2 className = 'pop-h2'>Random recipes</h2>
{windowWidth > 600 ? 
<> {meals.length !== 0 ?
      <Slider {...settings} class = 'small-slider'>
            {
              meals.map((elem) =>
              <div className='small-recipe'>
              <img src={elem.strMealThumb} alt='small-recipes-photo-1'/>
              <p onClick = {() => handleNavigateToRecipe(elem)}>{elem.strMeal}</p>
              <div className='small-recipe-icons'>
              <FontAwesomeIcon icon={faCarrot} />&nbsp;9 ingredients
                |&nbsp;
                <FontAwesomeIcon icon={faComment} />&nbsp;7&nbsp;
                <FontAwesomeIcon icon={faEye} />&nbsp;14
              </div>
            </div>
              )
            }
             {/* 
            <div className='small-recipe'>
              <img src={smallRecipePhoto1} alt='small-recipes-photo-1'/>
              <p>Raspberry & Cream Frozen Yogurt Pie</p>
              <div className='small-recipe-icons'>
              <FontAwesomeIcon icon={faClock} />&nbsp;35 mins 
                |&nbsp;
                <FontAwesomeIcon icon={faComment} />&nbsp;7&nbsp;
                <FontAwesomeIcon icon={faEye} />&nbsp;14
              </div>
            </div>
            <div className='small-recipe'>
              <img src={smallRecipePhoto2} alt='small-recipes-photo-2'/>
              <p>Giant Ice Cream Sandwich</p>
              <div className='small-recipe-icons'>
             <FontAwesomeIcon icon={faClock} />&nbsp;20 mins 
                |&nbsp;
                <FontAwesomeIcon icon={faComment} />&nbsp;4&nbsp;
                <FontAwesomeIcon icon={faEye} />&nbsp;356
              </div>
            </div>
            <div className='small-recipe'>
              <img src={smallRecipePhoto3} alt='small-recipes-photo-3'/>
              <p>Dark Chocolate Crunch Ice Cream Sandwich Cake</p>
              <div className='small-recipe-icons'>
              <FontAwesomeIcon icon={faClock} />&nbsp;15 mins 
                |&nbsp;
                <FontAwesomeIcon icon={faComment} />&nbsp;4&nbsp;
                <FontAwesomeIcon icon={faEye} />&nbsp;167
              </div>
          </div>*/}
           
            </Slider> :<> <div className='loading-container'>
          
          <h2 style = {{color: '#c2c2c2'}}><FontAwesomeIcon icon={faSpinner} spinPulse size = '2xl'/></h2>
         
          </div></>}</> : <>{meals.length !== 0? <>
            {
               
              meals.map((elem) =>
              <div className='small-recipe'>
              <img src={elem.strMealThumb} alt='small-recipes-photo-1'/>
              <p onClick = {() => handleNavigateToRecipe(elem)}>{elem.strMeal}</p>
              <div className='small-recipe-icons'>
              <FontAwesomeIcon icon={faCarrot} />&nbsp;9 ingredients
                |&nbsp;
                <FontAwesomeIcon icon={faComment} />&nbsp;7&nbsp;
                <FontAwesomeIcon icon={faEye} />&nbsp;14
              </div>
            </div>
              )
            }</>: <> <div className='loading-container'>
           
            <h2 style = {{color: '#c2c2c2'}}><FontAwesomeIcon icon={faSpinner} spinPulse size = '2xl'/></h2>
            
            </div></>}
            {/* 
            <div className='small-recipe'>
              <img src={smallRecipePhoto1} alt='small-recipes-photo-1'/>
              <p>Raspberry & Cream Frozen Yogurt Pie</p>
              <div className='small-recipe-icons'>
              <FontAwesomeIcon icon={faClock} />&nbsp;35 mins 
                |&nbsp;
                <FontAwesomeIcon icon={faComment} />&nbsp;7&nbsp;
                <FontAwesomeIcon icon={faEye} />&nbsp;14
              </div>
            </div>
            <div className='small-recipe'>
              <img src={smallRecipePhoto2} alt='small-recipes-photo-2'/>
              <p>Giant Ice Cream Sandwich</p>
              <div className='small-recipe-icons'>
             <FontAwesomeIcon icon={faClock} />&nbsp;20 mins 
                |&nbsp;
                <FontAwesomeIcon icon={faComment} />&nbsp;4&nbsp;
                <FontAwesomeIcon icon={faEye} />&nbsp;356
              </div>
            </div>
            <div className='small-recipe'>
              <img src={smallRecipePhoto3} alt='small-recipes-photo-3'/>
              <p>Dark Chocolate Crunch Ice Cream Sandwich Cake</p>
              <div className='small-recipe-icons'>
              <FontAwesomeIcon icon={faClock} />&nbsp;15 mins 
                |&nbsp;
                <FontAwesomeIcon icon={faComment} />&nbsp;4&nbsp;
                <FontAwesomeIcon icon={faEye} />&nbsp;167
              </div>
            </div>
            */}
          </>
      }
    </div>
    </div>
    
  );
}

 