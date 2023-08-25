
import './Videos.css'
import {React, useState, useEffect} from 'react'

export const Videos = () =>{
    const [meals, setMeals] = useState([])
    async function getVideos(){
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=a`); 
        const recipes = await response.json();
        if (recipes.meals){
          setMeals(recipes.meals);
        }
         
        else
          setMeals([]);
       
        
    }
    useEffect(()=>{
        getVideos()
    }, [])
    return(
    <div className="videos-wrapper">
        { console.log(meals)}
        {
            
        meals.map((elem)=><div>
          <p>   {elem.strMeal}&nbsp; <span style={{color: 'blue'}}> {elem.strYoutube}</span>
           {elem.strCategory} {elem.strArea}</p> 
        </div>
        
        )}

    </div>
    )
}