import React from 'react';
import classes from './OrderForm.module.css';
const OrderForm = () => {
  return (
    <div className={classes.formContainer}>
      <h1>Complete the form below and hit submit</h1>
      <form className={classes.orderForm}>
        <ul>
          <li>
            <input
              type="text"
              name="name"
              className={`${classes.fieldStyle} ${classes.fieldSplit} ${classes.alignLeft}`}
              placeholder="Name"
            />
            <input
              type="text"
              name="phone"
              className={`${classes.fieldStyle} ${classes.fieldSplit} ${classes.alignRight}`}
              placeholder="Phone no."
            />
          </li>
          <li>
            <input
              type="text"
              name="email"
              className={`${classes.fieldStyle} ${classes.fieldFull}`}
              placeholder="Email"
            />
          </li>
          <li>
            <textarea
              name="address"
              className={classes.fieldStyle}
              placeholder="Address"
            ></textarea>
          </li>
          <li>
            <input type="submit" value="Submit Order" />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default OrderForm;
