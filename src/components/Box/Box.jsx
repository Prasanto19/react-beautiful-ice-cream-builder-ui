/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import classes from './Box.module.css';
import Items from './Items/Items';
import Modal from './Modal/Modal';
import TotalPrice from './TotalPrice/TotalPrice';
const Box = ({ items, price, add, remove, scoops }) => {
  const [show, setShow] = useState(true);
  return (
    <div className="react">
      <div className={classes.box}>
        <h3>Add your favourite Ice Cream by clicking {'+'} icon!</h3>

        <Items items={items} add={add} remove={remove} scoops={scoops} />

        <TotalPrice price={price} />
        <button
          type="button"
          onClick={() => setShow(s => !s)}
          className={`${classes.order} rounded `}
        >
          Add to Cart
        </button>
      </div>

      {!show ? <Modal /> : null}
    </div>
  );
};

export default Box;
