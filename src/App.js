import React,{useState , useEffect} from 'react';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import Header from './components/Header/Header';
import styled from 'styled-components';
import axios from 'axios';
import { Alert } from 'reactstrap';



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
  const [visible, setVisible] = useState(false);
  const onDismiss = () => setVisible(false);

  const componentDidMount = async() =>{
    const response = await axios.get('https://api.coinpaprika.com/v1/tickers');
    const sortedCoins = response.data.sort((a,b) => a.rank - b.rank).slice(0,COIN_COUNT);
    const finalCoinData = sortedCoins.map(coin =>{
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

  useEffect(function(){
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

 

  const handleBuying = (buyCoinId) =>{
    var coins = coinData.map(coin => {
      const newValue = {...coin};
      if(coin.key === buyCoinId){
        setAmount(oldValue =>{
          var computeAmount = oldValue -  newValue.price;
          if(computeAmount <= 0){
            setVisible(true);
            return oldValue;
          }
          else{
              newValue.balance =newValue.balance + 1;
              return formatPrice(computeAmount);
          }
          
        });
      }
      return newValue;
    });
    setCoinData(coins);
  }

  const handleBalance = () =>{
    setAmount(oldValue => oldValue + 1200);
  }
  const handleDisplay = () => {
    setShowBalance(oldValue => !oldValue);
  } 

    return (
      <AppDiv>
        
        <Header />
        <Alert color="warning" isOpen={visible} toggle={onDismiss}>
          I am an alert and I can be dismissed!
        </Alert>
        <AccountBalance  
             amount = {amount} 
             showBalance={showBalance} 
             handleDisplay = {handleDisplay}
             handleBalance = {handleBalance}
        />
        <CoinList 
             coinData = {coinData} 
             refresh = {handleRefresh} 
             showBalance={showBalance}
             buy = {handleBuying}
        />
      </AppDiv>
    );
  
}

export default App;
