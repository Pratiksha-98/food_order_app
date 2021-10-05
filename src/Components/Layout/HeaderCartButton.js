import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './Headercartbutton.module.css';
import CartContex from '../Store/CartContex';

const HeaderCartButton = (props) => {
  const [btnIsHighLighted, setbtnIsHighLighted]= useState(false);
  const CartCtx = useContext(CartContex);

  const numberOfCartItems = CartCtx.items.reduce((curNumber, item)=>{
    return curNumber=item.amount;
  },0);

  const {items}= CartCtx;

  const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump:''}`;

  useEffect(()=> {
    if(CartCtx.items.length ===0){
      return;
    }
  setbtnIsHighLighted(true);

  const timer = setTimeout(() =>{
    setbtnIsHighLighted(false);
  }, 300);

  return () => {
   clearTimeout(timer);
  };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;