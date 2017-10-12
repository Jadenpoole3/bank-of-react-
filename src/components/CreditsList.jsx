import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Credit from './Credit.jsx'

// class DebitsList extends Component {
//     render(props) {

const creditsComponent = (props) => {

    const CreditsList = props.credits.map((credit, index) => {
        return <Credits
      
               description={credit.description}
               Amount= {credit.amount}
                Date={credit.date}
                
                key={index}/>
         
     
    });
    return (
      <div>
          <h1>credits List</h1>
          {CreditsList}

      </div>
      
    );

}
        
   

export default CreditsList;