import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { AiOutlineCloseCircle, AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import MyContext from '../MyContext';
import Cartshopping from './Cartshopping';

export default function TemporaryDrawer() {
  const navigate = useNavigate();
  const { buyProduct } = useContext(MyContext);
  const handleClick = () => {
    navigate('/cartList', { state: { buyProduct } });
  };

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const totalProducts = buyProduct.reduce((total, product) => {
    return total + product.countProduct;
  }, 0);

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <button onClick={toggleDrawer(anchor, true)}>
            <div style={{ position: 'relative' }}>
            <AiOutlineShoppingCart fontSize={50} color='black' />
            {totalProducts > 0 && <span className="Cart-item-count"  style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  backgroundColor: 'black',
                  color: 'white',
                  borderRadius: '50%',
                  padding: '4px',
                  fontSize: '12px',
                  }}>{totalProducts}</span>}
                  </div>
          </button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div>
              <AiOutlineCloseCircle fontSize={30} color='red' onClick={toggleDrawer(anchor, false)} />
              <Cartshopping />
              <button onClick={handleClick} color='pink'>Check Out</button>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
