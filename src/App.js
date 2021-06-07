// import './App.css';
import React from 'react';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import Header from './components/Header/Header';
import styled from 'styled-components';

const AppDiv = styled.div`
  text-align: center;
  background-color: rgb(13, 13, 49);
  color: bisque;
`;

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      pageTitle : "Coin Exchange", 
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
      <AppDiv>
        <Header title= {this.state.pageTitle}/>
        <AccountBalance  amount = {this.state.amount}/>
        <CoinList coinData = {this.state.coinData}/>
      </AppDiv>
    );
  }
}

export default App;
