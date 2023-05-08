import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Recipe from '../pages/Recipe';

const MealItem = ({item}) => {

  

  return (
    <div className='MealItem'>
       
       <div>{item.strMeal}</div>
       <img src={item.strMealThumb}/>
       <div>{item.idMeal}</div>
       <Link to={'/recipe/' + item.idMeal}>Watch Recipe</Link>
      
    </div>
  )
}

export default MealItem