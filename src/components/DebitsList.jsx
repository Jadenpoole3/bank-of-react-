import React, { Component } from 'react';

import Debits from './Debits.jsx'

// class DebitsList extends Component {
//     render(props) {

const DebitsList = (props) => {

    const debitsComponents = props.debits.map((debit, index) => {
        return <Debits
      
               description={debit.description}
               Amount= {debit.amount}
                Date={debit.date}
                
                key={index}/>
         
     
    });
    return (
      <div>
          <h1>debits List</h1>
          {debitsComponents}

      </div>
      
    );

}
        
   

export default DebitsList;