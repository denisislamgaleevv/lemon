import './PhotoGallery.css'
import React,{   useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useNavigate} from 'react-router-dom';
export const PhotoGallery = ({tRecipe, setTRecipe}) =>{
  const navigate = useNavigate();
  const [images, setImages] = useState([])
  async function  findRecipe(){  
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    const recipes = await response.json();
    if (recipes.meals){
      setImages(recipes.meals); 
    }   
    else
      setImages([]);  
    console.log(images)
}
useEffect(()=>{
  
  findRecipe()
    
}, [ ])

function recipeClick(elem){
 
  setTRecipe(elem)
  navigate(`/recipe-${elem.strMeal}`);

 
}
    return( 
        <div className='gallery-container'> 
          <div className='galleryNew'>
         {images.length !== 0? 
      <div >
               <div class = 'img-cards'>
                
              {
              images.map((elem) =>
             <div className = 'img-card'>
              
                <img onClick = {()=>recipeClick(elem)} src = {elem.strMealThumb}/>
              
            </div>)  
        }</div>
        </div> : 
        <div className='loading-container'>
          <div className='loading'> 
          <h2><FontAwesomeIcon icon={faSpinner} spinPulse size = '2xl'/></h2>
          </div>
          </div> }
          </div>
        
        </div>
      
    )
}