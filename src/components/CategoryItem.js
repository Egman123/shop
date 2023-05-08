import {Link} from 'react-router-dom'

const CategoryItem = ({item}) => {
  return (
    <div className='CategoryItem'>
        <div>{item.idCategory}</div>
        <div>{item.strCategory}</div>
        <img src={item.strCategoryThumb} />
        <div>{item.strCategoryDescription}</div>
        <Link to={'/category/'+ item.strCategory}>Watch {item.strCategory}</Link>
        <hr />
     
    </div>
  )
}

export default CategoryItem