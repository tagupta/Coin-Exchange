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
  state = {
    pageTitle : "Coin Exchange", 
    showBalance : false,
    amount : 10000,
    coinData : [
      {
        name: "Bitcoin",
        ticker: "BTC",
        price: 9999.99,
        balance: 0.5
      },
      {
        name: "Ethereum",
        ticker: "ETH",
        price: 299.99,
        balance: 46
      },
      {
        name: "Tether",
        ticker: "USDT",
        price: 2.99,
        balance: 0
      },
      {
        name: "Dogecoin",
        ticker: "Doge",
        price: 0.4095,
        balance: 1000
      },
      {
        name: "Bitcoin Cash",
        ticker: "BCH",
        price: 239.75,
        balance: 0
      }
    ]
  };

  handleRefresh = (valueChangeTicker) => {
     const newCoin = this.state.coinData.map(function(value){
       var newValue = {...value};
     
       if(newValue.ticker === valueChangeTicker){
           const randomPercentage = 0.995 + Math.random() * 0.01;
           newValue.price *= randomPercentage;
       }
       return newValue;

     });
    
     this.setState({coinData : newCoin});
    
  }

  handleDisplay = () => {
    this.setState(function(oldState){
      return {
        ...oldState,
        showBalance : !oldState.showBalance
      };
    });
  } 

  render(){
    return (
      <AppDiv>
        <Header 
             title= {this.state.pageTitle}
        />
        <AccountBalance  
             amount = {this.state.amount} 
             showBalance={this.state.showBalance} 
             handleDisplay = {this.handleDisplay}
        />
        <CoinList 
             coinData = {this.state.coinData} 
             refresh = {this.handleRefresh} 
             showBalance={this.state.showBalance}
        />
      </AppDiv>
    );
  }
}

export default App;
