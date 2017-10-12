import React, { Component } from 'react';
import Credits from './Credits'
import AccountBalance from './AccountBalance'
import NewCreditsForm from './NewCreditsForm'
import {Link} from 'react-router-dom'
import CreditsList from './CreditsList'

        const CreditsView = (props) => {
            <Link to="/"> Home </Link>
            return (
                <div>
                    <h1> Credits Page</h1>
                    <AccountBalance  accountBalance={props.AccountBalance}/>
                    <br/>

                    <NewCreditsForm NewCreditsForm={props.NewCreditsForm}/>
                    <br/>

                    <CreditsList debits={props.CreditsList}/>
                </div>
            );
        }
        


export default CreditsView;