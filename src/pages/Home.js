import {getAllCategories, getCategoriesById, getMealByCategory} from '../api';
import { useEffect, useState } from "react";
import CategoryList from '../components/CategoryList';
import Search1 from '../components/Search1';
import Search2 from '../components/Search2';


const Home = () => {

    const [category, setCategory] = useState([]);
    const [flag, setFlag] = useState(true);
    const [filteredCategory, setFilteredCategory] = useState('')

    useEffect(()=>{
      getAllCategories().then((data) => {
         setCategory(data.categories)
      })
      
    },[])

   const submitHandler1 = (str) => {
     setFilteredCategory(category.filter(el => el.strCategory.includes(str)))
   }

   const submitHandler2 = (str,searchBy) => {
      setFilteredCategory(category.filter(el => el[searchBy].includes(str)))    
   }

    const sortByCategory = () => {
     const newCategory = category.sort(function (a, b) {
        if(flag){
            if (a.strCategory > b.strCategory) {
                return 1;
              }
              if (a.strCategory < b.strCategory) {
                return -1;
              }
              return 0;
          }else {
             if (a.strCategory > b.strCategory) {
              return -1;
            }
            if (a.strCategory < b.strCategory) {
              return 1;
            }
            return 0;
          }
        })
          setFlag(!flag)
          setCategory([...category])
    }

  return (
    <div>
        <Search1 submitHandler1={submitHandler1}  />
        <Search2 submitHandler2={submitHandler2} />
        <button onClick={sortByCategory}>Sort by Category {flag? <i className="fas fa-sort-amount-up-alt"></i> : <i className="fas fa-sort-amount-down-alt"></i>}</button>
        <CategoryList category={filteredCategory? filteredCategory : category}/>
    </div>
  )
}

export default Home