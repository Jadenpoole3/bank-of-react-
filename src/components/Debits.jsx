import React, { Component } from 'react';


// class Debits extends Component {
//     render() {

const Debits = (props) => {

    return(
        <div>
            <div> Description: {props.description}</div>
            <br/>
            <div> Amount: {props.amount}</div>
            <br/>
            <div> Date: {props.date}</div>
        </div>
    )
}
    
           
  

export default Debits;