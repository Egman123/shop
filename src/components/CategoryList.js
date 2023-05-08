import CategoryItem from "./CategoryItem"

const CategoryList = ({category}) => {
  return category.map((el, index) => (
     <CategoryItem item={el} key={index}/>
  ))
}

export default CategoryList