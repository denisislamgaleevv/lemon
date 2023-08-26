
import './FindPage.css'
import {React, useState, useEffect} from 'react';
import { Recipe } from '../Recipe/Recipe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { hover } from '@testing-library/user-event/dist/hover';
import { useNavigate} from 'react-router-dom';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
export const FindPage = ({tRecipe, setTRecipe}) =>{
  const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [meals, setMeals] = useState( []);
    const [recipeVisibility, setRecipeVisibility] = useState(false)
    const [isHovered, setIsHovered] = useState(false);
    const [isUsed, setIsUsed] = useState(false)
    const [page, setPage] = useState(1)
    //const [elemsPerPage, setElemsPerPage] = useState(8);
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };

     
     
    useEffect(()=>{
      if (!isUsed)
      findRecipe()
        
    }, [inputValue, page])

     function recipeClick(elem){
        setRecipeVisibility(true)
        setTRecipe(elem)
        navigate(`/recipe-${elem.strMeal}`);

       
    }

    async function  findRecipe(){
      
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
        const recipes = await response.json();
        
        setIsUsed(true);
        if (recipes.meals){
          setMeals(recipes.meals);
           
          
        }
         
        else
          setMeals([]);
        navigate(`/search#${inputValue}`);


        
    }
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        findRecipe()
      }
    };

    return (<>
    {recipeVisibility? 
    
    <Recipe tRecipe = {tRecipe} inputValue={inputValue}/> :
    <>
    <div class = 'find-wrapper'> 
    <div className='find-container'> 
          <div className='find'>
          <a style = {{marginRight: '15px'}}href =  '/'><FontAwesomeIcon 
             style={{
                color: isHovered ? "#808080" : "#c2c2c2",
                cursor: 'pointer', 
                marginRight: '2%'
              }}
              className = 'arrow-left' icon={faCircleArrowLeft }
               size="2xl" 
                 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                /></a>
             <input 
             className = 'find-input'
             value={inputValue}
             onChange={handleInputChange}
             placeholder='TYPE SOMETHING'
             onKeyPress={handleKeyPress}
             />
            <a class = 'input-href-a'>
            <button className='find-btn' 
            onClick={() => findRecipe()}>
              FIND
            </button>
            </a>   
          </div>   
        </div>
        </div>
       
    <div class = 'found-recipes'>
    {meals.length !== 0? 
        <div className = 'found-recipes-wrapper'>
               <div class = 'found-recipes-cards'>
             {
             
            meals.map((elem) =>
            <div className = 'found-recipes-card'>
              
            
                <img src = {elem.strMealThumb}/>
              
                <a><p onClick = {()=>recipeClick(elem)}>{elem.strMeal}</p></a>
            

            </div>)  
        }
       {/* <ul className='pagination'>
          {[...Array(7)].map((_, i) => (
          <li 
          onClick={() => setPage(i+1)}
          className={page === (i+1) ? 'active' : 'not-active'}>
            {i+1}
          </li>
          ))}
        </ul>*/}
        </div>
         
        </div> : <> {isUsed?
        <div className='card-error-wrapper'>
    <div className='card-error'><div className='error'>
        <h4>&nbsp;&nbsp;</h4>
        
        <div className='sorry-text-container'> 
          <h2>Sorry</h2>
          <p>WE COULDN’T<br/>FIND THE PAGE<i className="fa fa-frown-o fa-2x" aria-hidden="true"></i></p>
        </div>
        <button className='preview-btn'>BACK</button>
      </div> </div></div> : <>
      {meals.length !== 0? 
      <div className = 'found-recipes-wrapper' >
               <div class = 'found-recipes-cards'>
                
              {
              meals.map((elem) =>
             <div className = 'found-recipes-card'>
              
                <img src = {elem.strMealThumb}/>
              
                <a href = {`#${elem.strMeal}`}><p onClick = {()=>recipeClick(elem)}>{elem.strMeal}</p></a>
            

            </div>)  
        }</div>
        </div> : 
        <div className='loading-container'>
          <div className='loading'> 
          <h2><FontAwesomeIcon icon={faSpinner} spinPulse size = '2xl'/></h2>
          </div>
          </div> }
      </>} </>
      }
    </div>
    </>}
    </>)
}