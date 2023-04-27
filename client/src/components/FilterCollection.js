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
            <option value="cakes">cakes</option>
            <option value="desserts">desserts</option>
            <option value="Shabbat cake">Shabbat cake</option>
            <option value="happy birthday cake">happy birthday cake</option>
          </select>
        </div>
    )
   
}
export default FilterCollection