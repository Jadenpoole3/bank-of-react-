import React, { Component } from 'react';



// class Credits extends Component {
//     render() {
    const Credits = () => {

        const creditList = this.props.credits.map((credit) => {
            return(
                <div key={credit.id}>
                    <div>{credit.description}</div>
                    <div>Amount: {credit.amount}</div>
                    <div> Date: {credit.date}</div>
                    <br/>
                </div>
            );
        })
        return (
          <div>
              <h1>Credits List</h1>
              {creditList}
       
          </div>
          
        );
   
    }
        

export default Credits;