import FilterCollection from "./FilterCollection"
import SortCollection from "./SortCollection"
import './sort.css'
const Sort = ()=>{
    return(
        <div className="sort">
            <SortCollection/>
            <FilterCollection/>
        </div>
    )
  }

  export default Sort