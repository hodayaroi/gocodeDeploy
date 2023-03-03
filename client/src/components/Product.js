import './product-card.css'
import './product-image.css'
import './product-info.css'
import {BsCartPlus} from 'react-icons/bs';
import {BsCartDash} from 'react-icons/bs'
import { useContext } from 'react';
import MyContext from '../MyContext';
import { useNavigate } from "react-router-dom";

const Product =({id,imgUrl,title,price})=> {
   const navigate = useNavigate()
  const {productsData,buyProduct,setbuyProduct} = useContext(MyContext)
  
  const handleSubmit=()=>{
    if(id!==""&& buyProduct){
      console.log(id)
      productsData.filter((elemnt)=>{
        if(elemnt.id===id){
          console.log(buyProduct.some(object => object.id === id))
          if(!buyProduct.some(object => object.id === id)){
            setbuyProduct([...buyProduct,{"id":elemnt.id,"title":elemnt.title,"price":elemnt.price,
            "description":elemnt.description,"category":elemnt.category,
            "image":elemnt.image,"rating":elemnt.rating,"countProduct":1}]);
          }
          else{
            setbuyProduct(buyProduct.filter((elemnt)=>{
              if(elemnt.id===id){
                elemnt.countProduct=elemnt.countProduct+1
                return elemnt

              }
              else{
                return elemnt
              }

            }))
          }
          console.log(buyProduct)
          alert("The product has been successfully added")
          return
        }
      })
     
    }
  }

  const removePruduct=()=>{
    if(id!==""){
      setbuyProduct(buyProduct&&buyProduct.filter((elemnt)=>{
        if(elemnt.id!==id){
          return elemnt
        }
        else if (elemnt.id===id){
          elemnt.countProduct=elemnt.countProduct-1
          if (elemnt.countProduct!==0){
            return elemnt
            
          }
          alert("The product has been removed successfully")
          console.log(elemnt.countProduct)
          console.log(buyProduct)
          
        }
      }))
      }
    }


    return(
      <div className="product-card">
        <div className="product-image">
          <img
            onClick={() => {navigate(`products/${id}`)}}
            alt="something amazing"
            src={imgUrl}/>
        </div>
        <div className="product-info">
          <h5>{title}</h5>
          <h6>{price}</h6>
          <BsCartDash fontSize={30} color='red' onClick={removePruduct}/>
         <BsCartPlus fontSize={30} color='green' onClick={handleSubmit} />
        </div>
      </div>
    )
  }
  export default Product