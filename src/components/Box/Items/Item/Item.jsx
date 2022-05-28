/* eslint-disable react/prop-types */
import React from 'react';
import classes from './Item.module.css';
import { countBy } from 'lodash';
const Item = ({ name, add, remove, scoops = {}, unitPrice }) => {
  const scoopsByCount = countBy(scoops);
  return (
    <li className={classes.item}>
      <b>{name}</b>[ {unitPriceTk]
      {scoopsByCount[name] >= 0 ? (
        <span className={classes.quantity}>
          {' X'}
          {scoopsByCount[name]}
        </span>
      ) : null}
      <div className="right">
        <button
          type="button"
          onClick={add.bind(this, name)}
          className={`${classes.plus} rounded`}
        >
          +
        </button>
        {scoopsByCount[name] > 0 ? (
          <button
            type="button"
            onClick={remove.bind(this, name)}
            className={`${classes.minus} rounded`}
          >
            {' '}
            -
          </button>
        ) : null}
      </div>
    </li>
  );
};

export default Item;
