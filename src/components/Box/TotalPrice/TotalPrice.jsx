/* eslint-disable react/prop-types */

import React from 'react';
import classes from './TotalPrice.module.css';
const TotalPrice = ({ price = 0 }) => {

  return (
    <div className={classes.total}>
      <div>Total Price</div>
      {price > 0 ? <div>{price.toFixed(2)} Tk</div> : <div>0.00 Tk</div>}
    </div>
  );
};

export default TotalPrice;
