
import './Recipe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faBarChart } from '@fortawesome/free-solid-svg-icons'
import { Routes, Route } from 'react-router-dom';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState} from 'react';
export const Recipe = ({tRecipe, inputValue}) =>{
  const backgroundImageUrl = `url('${tRecipe.strMealThumb}')`;
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = tRecipe[`strIngredient${i}`];
    const measure = tRecipe[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }
  const [images, setImages] = useState([])
  async function getIng(){
    let t = []
    for (let i = 1; i <= 20; i++) { 
      const ingredient = tRecipe[`strIngredient${i}`];

      if (ingredient !== '' && i !==20){
        const response =  await fetch(`https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`)
     
        if (response.url){
          t.push(response.url);
        }   
      } 
    
      else{
        setImages(t)
        return;
      }
      
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    getIng()
  
  }, []);

    return(
        <div className='big-recipe-wrapper'>  
       
        <div className='big-recipe'>
          <div  
          
          style={{
            position: 'relative', 
            backgroundImage: backgroundImageUrl,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat', 
            width: '100%', 
            height: '500px', 
          
          }}
          >
           <a href = {`/search`}>
            <FontAwesomeIcon size="2xl" icon = {faCircleArrowLeft} style ={{
              position: 'absolute', 
              marginTop: '40px', 
              marginLeft: '20px', 
              color: '#ffffffdd'

            }}/>
            </a>
            </div>
          <div className='big-recipe-right'>
            <h3>{tRecipe.strMeal}</h3>
            <div className='big-recipe-right-text-btn-container'>  
              <p>     <FontAwesomeIcon icon={faClock} /> 15 mins <FontAwesomeIcon icon={faBarChart} /> Easy</p> <button className='preview-btn'>SAVE RECIPE</button>
            </div>
            <div className='big-recipe-text-container'>  
              <p className='big-recipe-ingredients'>
                <ul>
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              </p>
              <h4>Directions</h4>
              <p>
             {tRecipe.strInstructions}</p>
            </div>
          </div>
          
        </div>
        
        <div className='ingredients'>
        <h3 class = 'ingredients-h3'>Used Ingredients:</h3>
        {
         
         images.length !== 0 ?
         images.map((elem, index) => (
             <div className='ingredients-wrapper'>
                 <img src={elem} alt={`ingredient${index}`} className='ingredient-image' />
                 <p className='ingredient-name'>{ingredients[index]}</p>
             </div>
         ))
          
          :<>
          <h3 class = 'ingredients-h3'><FontAwesomeIcon style = {{color: '#555555'}} 
          icon={faSpinner} spinPulse size = '2xl'/>
          </h3></>
        }
        </div>
        <div>
          
        </div>
      </div>
    )
}