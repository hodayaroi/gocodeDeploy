import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Cartshopping from './Cartshopping'
import {AiOutlineShoppingCart} from 'react-icons/ai'

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

 
  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
            
          <Button onClick={toggleDrawer(anchor, true)}><AiOutlineShoppingCart fontSize={50}/></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
          {
            <div>
            <AiOutlineCloseCircle fontSize={30} color='red'  onClick={toggleDrawer(anchor, false)} />
            <Cartshopping/>
            </div>}
          
          </Drawer>
          
          
        </React.Fragment>
      ))}
    </div>
  );
}