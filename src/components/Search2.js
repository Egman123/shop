import { useState } from "react"


const Search2 = ({submitHandler2}) => {

    const [search, setSearch] = useState('')

    const onChangeHandler = (search, searchBy) => {
        submitHandler2(search, searchBy)
    }

  return (
    <div className="Search2">
      <input placeholder="Search Here..." onChange={(e)=> setSearch(e.target.value)}></input>
      <button onClick={() => onChangeHandler(search, 'strCategory')}>Search By Category</button>
      <button onClick={() => onChangeHandler(search, 'strCategoryDescription')}>Search By Description</button>
    </div>
  )
}

export default Search2