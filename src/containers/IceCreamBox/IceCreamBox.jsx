import React, { Component } from 'react';
import Box from '../../components/Box/Box';
import IceCream from './../../components/IceCream/IceCream';
import classes from './IceCreamBox.module.css';
export default class IceCreamBox extends Component {
  state = {
    items: { },
    scoops:[],
    totalPrice: 0
  };
  componentDidMount() {
    //fetch data from firebase 
    fetch('https://react-icecream-758cc-default-rtdb.asia-southeast1.firebasedatabase.app/items.json').then(response=>response.json()).then((responseData)=>{
      this.setState({
        items: responseData,
      });
    });//return promise
  }


  addScoop = (scoop) => {
    const {scoops,items} = this.state;
    const workingScoops = [...scoops];
    workingScoops.push(scoop);

    this.setState ((prevState) => {
      return {
      
        scoops: workingScoops,
        totalPrice: prevState.totalPrice + items[scoop],
      };
    });
  }
  removeScoop = (scoop) => {
    const { scoops, items } = this.state;
    const workingScoops = [...scoops];

    const scoopIndex = workingScoops.findIndex((sc) => sc === scoop);

    workingScoops.splice(scoopIndex, 1);
    this.setState((prevState) => {
        return {
            scoops: workingScoops,
            totalPrice: prevState.totalPrice - items[scoop],

        };
    });
};
  render() {
    const {items,totalPrice,scoops} = this.state;
    return(
      <div className={`container ${classes.container}`} >
          <IceCream scoops = {scoops} />
          <Box items = {items} price = {totalPrice} add = {this.addScoop} remove = {this.removeScoop} scoops = {scoops}/>
      </div>
    )
  };
  
}