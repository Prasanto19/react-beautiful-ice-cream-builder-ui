/* eslint-disable react/prop-types */
<<<<<<< HEAD
import React from 'react';
import classes from './TotalPrice.module.css';
const TotalPrice = ({ price = 0 }) => {
=======
import React from 'react'
import classes from './TotalPrice.module.css'
const TotalPrice = ({price = 0}) => {
>>>>>>> 5769928c3c1f72318459546f8b16f7dc45a17322
  return (
    <div className={classes.total}>
      <div>Total Price</div>
      {price > 0 ? <div>{price.toFixed(2)} Tk</div> : <div>0.00 Tk</div>}
    </div>
  );
};

<<<<<<< HEAD
export default TotalPrice;
=======
export default TotalPrice
>>>>>>> 5769928c3c1f72318459546f8b16f7dc45a17322
