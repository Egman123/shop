import { API } from "./config"

const getAllCategories = async() => {
   const response = await fetch(API + 'categories.php');
   return response.json()
}

const getMealById = async(id) => {
    const response = await fetch(API + 'lookup.php?i=' + id);
    return response.json()
}

const getMealByCategory = async(cat) => {
    const response = await fetch(API + 'filter.php?c=' + cat);
    return response.json()
}

export {getAllCategories, getMealById, getMealByCategory}