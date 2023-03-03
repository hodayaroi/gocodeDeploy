import './product-filter.css'
import Clock from './Clock'
import Sort from './Sort'
const Nav =() => {
    return(
    <nav className="product-filter">
    <h1>Product</h1>
    
    <Sort/>
    <div ><Clock/></div>
    
    </nav>
    )
  }

  export default Nav