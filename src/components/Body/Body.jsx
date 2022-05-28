import React from 'react';
import IceCreamBox from '../../containers/IceCreamBox/IceCreamBox';
import classes from './Body.module.css';

const Body = () => {
  return (
    <div className={classes.mainBody}>
      <IceCreamBox />
    </div>
  );
};

export default Body;
