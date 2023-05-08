import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {getMealByCategory} from '../api'
import MealList from '../components/MealList'

const Category = () => {
 
  const navigate = useNavigate()
  const [meals, setMeals] = useState([])
  const {name} = useParams()

  useEffect(()=> {
     getMealByCategory(name).then(data => {
       setMeals(data.meals)
     });
  }, [])

  return (
    <div>
       <button onClick={() => navigate(-1)}>Go Back</button>
       <MealList meals={meals}/>
    </div>
  )
}

export default Category