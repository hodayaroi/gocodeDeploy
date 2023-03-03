import './FilterSort.css'
import * as React from 'react';
import Slider from '@mui/material/Slider';
import { useContext } from 'react'
import MyContext from '../MyContext'

  
const SortCollection=()=>{
   const [value, setValue] = React.useState([0,1000]);
   const {setproductsData,productsCopy} = useContext(MyContext)
   const marks = [{ value: 0,label: '0', },{value: 500,label: '500 ',},{value: 1000,label: '1000', },];

  function valuetext(value) {
    return `${value}`;
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setproductsData(productsCopy.filter((element)=>{
          if(element.price>=newValue[0] && element.price<newValue[1] )
          {
            return element;
          }
        }))
  };
  
    return(
        <div className="collection-sort">
          <label width= {200}>Price range:</label>
          <Slider  min={0} max={1000} 
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
        marks={marks}
      />
      
          
        </div>
    )
}

export default SortCollection