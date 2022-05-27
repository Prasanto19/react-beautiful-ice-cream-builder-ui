import React from 'react'
import classes from './Box.module.css'
import Items from './Items/Items'
import Modal from './Modal/Modal'
import TotalPrice from './TotalPrice/TotalPrice'
const Box = ({items, price ,add, remove,scoops}) => {
  return (
    <div className="react" >
            <div className={classes.box}>
              <h3>Add your favourite Ice Cream by clicking "+" icon!</h3>
              
                <Items items = {items} add = {add} remove ={remove} scoops = {scoops}/>
                
              <TotalPrice price = {price}/>
              <button type="button" className={`${classes.order} rounded `}>
                Add to Cart
              </button>
            </div>

            <Modal>Hello Modal</Modal>
          </div>
  )
}

export default Box