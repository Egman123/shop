import { useEffect, useState } from 'react'
import {getMealById} from '../api'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Recipe = () => {

  const navigate = useNavigate()  
  const {id} = useParams()
  const [recipe, setRecipe] = useState([])


  useEffect(() => {
    getMealById(id).then((data) => {
        setRecipe(data.meals[0])
    })
  }, []) 

  return (
    <div className='Recipe'>
        <button onClick={() => navigate(-1)}>Go Back</button>
       <div>{recipe.idMeal}</div>
       <div>{recipe.strCategory}</div>
       <div>{recipe.strArea}</div>
        <img src={recipe.strMealThumb}></img>
       <div>{recipe.strInstructions}</div>
      
    </div>
  )
}

export default Recipe