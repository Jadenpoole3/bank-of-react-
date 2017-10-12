import React, { Component } from 'react';
import Debits from './Debits'
import AccountBalance from './AccountBalance'
import NewDebitsForm from './NewDebitsForm'
import {Link} from 'react-router-dom'
import DebitsList from './DebitsList'

        const DebitsView = (props) => {
            <Link to="/"> Home </Link>
            return (
                <div>
                    <h1> Debits Page</h1>
                    <AccountBalance  accountBalance={props.AccountBalance}/>
                    <br/>

                    <NewDebitsForm NewDebitsForm={props.NewDebitsForm}/>
                    <br/>

                    <DebitsList debits={props.DebitsList}/>
                </div>
            );
        }
        


export default DebitsView;