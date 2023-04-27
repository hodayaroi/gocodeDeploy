import './product-filter.css'
import Clock from './Clock'
import Sort from './Sort'

const Nav = () => {
  return (
    <nav className="product-filter">
        <Sort />
        <div className="Clock-container">
          {/* <Clock /> */}
        </div>
    </nav>
  )
}

export default Nav
