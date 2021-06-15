import React,{useState , useEffect} from 'react';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import Header from './components/Header/Header';
import styled from 'styled-components';
import axios from 'axios';
import { Alert } from 'reactstrap';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';


const AppDiv = styled.div`
  text-align: center;
  color: bisque;
`;
const COIN_COUNT = 10;
const TargetURL =  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc';
const formatPrice = price => parseFloat(Number(price).toFixed(5));

const App = () =>{

  const [showBalance,setShowBalance] = useState(false);
  const [amount , setAmount] = useState(10000);
  const [coinData , setCoinData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [alertMessage,setAlertMessage] = useState('');
  const onDismiss = () => setVisible(false);

  

  const componentDidMount = async() =>{
    const response = await axios.get(TargetURL);
    const sortedCoins = response.data.sort((a,b) => a.market_cap_rank - b.market_cap_rank).slice(0,COIN_COUNT);
    const finalCoinData = sortedCoins.map(coin =>{
      return {
        key : coin.id,
        name : coin.name,
        ticker : (coin.symbol).toUpperCase(),
        price : formatPrice(coin.current_price),
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
     const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${clickedId}`);
     const newPrice = response.data.market_data.current_price.usd;
     const newCoinData = coinData.map(function(value){
     var newValue = {...value};
       if(newValue.key === clickedId){
          newValue.price = formatPrice(newPrice);
       }
       return newValue;

     });
     setCoinData(newCoinData);
  }

 
 const handleBuying_selling = (check,coinId) =>{
  var coins = coinData.map(coin => {
    const newValue = {...coin};
    if(coin.key === coinId){
      setAmount(oldValue => {
        if(check){
          var computeAmount = oldValue -  newValue.price;
          if(computeAmount <= 0){
            setAlertMessage(`Oops!!! Insufficient Balance for a ${newValue.name}`);
            setVisible(true);
            return oldValue;
          }
          else{
              setVisible(false);
              newValue.balance =newValue.balance + 1;
              return formatPrice(computeAmount);
          }
        }
        else{
          if(newValue.balance <= 0){
            setAlertMessage(`Oops!!! Insufficient ${newValue.name} for sell.`);
            setVisible(true);
            return oldValue;
           }
           else{
            setVisible(false);
            newValue.balance -= 1;
            return formatPrice(oldValue + newValue.price);
           }
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
        <Alert color="warning" isOpen={visible} toggle={onDismiss} style={{width: '500px',display: 'inline-block'}}>
                  {alertMessage}
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
             handleBuying_selling = {handleBuying_selling}
             
        />
       
       
      </AppDiv>
      
    );
  
}

export default App;
