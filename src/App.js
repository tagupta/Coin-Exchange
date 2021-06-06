import logo from './logo.svg';
import './App.css';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import React from 'react';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      amount : 10000,
      coinData : [
        {
          name: "Bitcoin",
          ticker: "BTC",
          price: 9999.99
        },
        {
          name: "Ethereum",
          ticker: "ETH",
          price: 299.99
        },
        {
          name: "Tether",
          ticker: "USDT",
          price: 2.99
        },
        {
          name: "Dogecoin",
          ticker: "Doge",
          price: 0.4095
        },
        {
          name: "Bitcoin Cash",
          ticker: "BCH",
          price: 239.75
        }
      ]
    };
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Coin Exchange
          </h1>
        </header>
        <AccountBalance  amount = {this.state.amount}/>
        <CoinList coinData = {this.state.coinData}/>
      </div>
    );
  }
}

export default App;
