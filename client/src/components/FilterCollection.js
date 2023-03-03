import './FilterSort.css'
import { useContext } from 'react'
import MyContext from '../MyContext'

const FilterCollection =()=>{
  const {productsData, setproductsData,Allproducts,productsCopy} = useContext(MyContext)
  const handleChange =(event) =>{
    if(event.target.value==="All products")
      {

        setproductsData(Allproducts())
        
      }
    setproductsData(productsCopy && productsCopy.filter((element)=>{
      
      if(element.category===event.target.value){
        return element
      }
    
     }))
    }
  
  
    return(
      
        <div className="collection-sort">
          <label>Filter by:</label>
          <select  onChange={handleChange }>
          <option value="All products">All products</option>
            <option value="men's clothing">men's clothing</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
            <option value="women's clothing">women's clothing</option>
          </select>
        </div>
    )
   
}
export default FilterCollection