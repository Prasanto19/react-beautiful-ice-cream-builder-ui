/* eslint-disable react/prop-types */

import React from 'react';
import classes from './TotalPrice.module.css';
const TotalPrice = ({ price = 0 }) => {

  return (
    <div className={classes.total}>
      <div>Total Price</div>
      {price > 0 ? <div>{price}円</div> : <div>0円</div>}
    </div>
  );
};

export default TotalPrice;
