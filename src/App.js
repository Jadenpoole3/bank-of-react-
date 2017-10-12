import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile'
import AccountBalance from './components/AccountBalance'
import axios from 'axios'
import DebitsView from './components/DebitsView.jsx'
import CreditsView from './components/CreditsView.jsx'


class App extends Component {
  state = {
    debits: [],
    credits: [],
    user: {
      userName: 'Jaden',
      memberSince: 1999

    },
    
    accountBalance: 14568.27
  }


  searchForAllDebits = () => {
    axios.get('http://localhost:4000/debits')
    .then((res) => {
      const debits = res.data
      this.setState({debits})

    })
    .catch((error) => {
  console.log(error)
})

  }

  searchForAllCredits = () => {
    axios.get('http://localhost:4000/credits')
    .then((res) => {
      const credits = res.data
      this.setState({credits})
    })
.catch((error) => {
  console.log(error)
})

  }
  
 
  componentWillMount() {
    this.searchForAllCredits()
    this.searchForAllDebits()
  }




  render() {

    // // getTotal = () => {
    //   const totalDebit = 
    // this.state.debits.reduce((sum, add) => {
    //   return sum + add.amount
    // }, 0)

    // const totalCredit = 
    // this.state.credit.reduce((sum, add) => {
    //   return sum + add.amount
    // }, 0)

    // const accountBalance = totalCredit - totalDebit
    // this.setState({accountBalance})
    // // }

    

    
    const AccountBalanceWrapper = () => {
      // const totalDebits = this.state.debits.reduce((acc, item) => {
      //   return item.amount
      // })
    return (<AccountBalance accountBalance={this.state.accountBalance} />)
  }

  const UserProfileWrapper = () => {
    return (<UserProfile userName={this.state.user.userName}
    memberSince={this.state.user.memberSince} />)
  }

  const DebitsViewWrapper = () => {
    return (<DebitsView debits={this.state.debits} />)
  }

  const CreditsWrapper = () => {
    return (<CreditsView credits={this.state.credits} />)
  }

    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/account" render={AccountBalanceWrapper}/>
            <Route exact path="/user" render={UserProfileWrapper}/>
            <Route exact path="/credits" render={CreditsWrapper} />
            <Route exact path="/debits" render={DebitsViewWrapper} />
          </Switch>
        </Router>
    );
  }
}

export default App;
