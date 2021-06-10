import React,{useState , useEffect} from 'react';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import Header from './components/Header/Header';
import styled from 'styled-components';
import axios from 'axios';

const AppDiv = styled.div`
  text-align: center;
  background-color: rgb(13, 13, 49);
  color: bisque;
`;
const COIN_COUNT = 10;

const formatPrice = price => parseFloat(Number(price).toFixed(5));

const App = () =>{

  const [showBalance,setShowBalance] = useState(false);
  const [amount , setAmount] = useState(10000);
  const [coinData , setCoinData] = useState([]);

  const componentDidMount = async() =>{
    const resp = await axios.get('https://api.coinpaprika.com/v1/coins');
    const coinIDs = resp.data.slice(0,COIN_COUNT).map(coin => coin.id);
    const tickerURL = `https://api.coinpaprika.com/v1/tickers/`;
    const promises = coinIDs.map(id => axios.get(tickerURL + id));
    const coinData = await Promise.all(promises);
    const finalCoinData = coinData.map(response => {
      const coin = response.data;
      return {
        key : coin.id,
        name : coin.name,
        ticker : coin.symbol,
        price : formatPrice(coin.quotes.USD.price),
        balance : 0
      };
    });
    setCoinData(finalCoinData);
  }

  useEffect(async function(){
    if(coinData.length === 0){
      componentDidMount();
      }
  });

  

 
  const handleRefresh = async(clickedId) => {
     const response = await axios.get(`https://api.coinpaprika.com/v1/tickers/${clickedId}`);
     const newPrice = response.data.quotes.USD.price;
     const newCoinData = coinData.map(function(value){
     var newValue = {...value};
       if(newValue.key === clickedId){
          newValue.price = formatPrice(newPrice);
       }
       return newValue;

     });
     setCoinData(newCoinData);
  }

  const handleDisplay = () => {
    setShowBalance(oldValue => !oldValue);
  } 

    return (
      <AppDiv>
        <Header />
        <AccountBalance  
             amount = {amount} 
             showBalance={showBalance} 
             handleDisplay = {handleDisplay}
        />
        <CoinList 
             coinData = {coinData} 
             refresh = {handleRefresh} 
             showBalance={showBalance}
        />
      </AppDiv>
    );
  
}

export default App;
