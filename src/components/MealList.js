import MealItem from "./MealItem"

const MealList = ({meals}) => {
  return meals.map((el, index) => (
     <MealItem key={index} item={el}/>
  ))
}

export default MealList