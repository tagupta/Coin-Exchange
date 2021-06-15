import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Button} from 'reactstrap';
import PriceModal from '../PriceModal/PriceModal';

const TableData = styled.td`
    border:2px solid #cccccc;
    width: 25vh;
    vertical-align: middle;
   
`;

const Coin = ({id,name,ticker,price,balance,refresh,showBalance,handleBuying_selling}) => {
   
  
   const handleClick = (event) => {
       event.preventDefault();
       refresh(id);
   } 
   const handleBuy = (event) =>{
    event.preventDefault();
    handleBuying_selling(true,id);
   }
   const handleSell = (event) =>{
    event.preventDefault();
    handleBuying_selling(false,id);
   }
       const url = `https://twitter.com/search?q=${name}`;
       const linkClass = 'btn btn-link';
       const buyClass = 'btn btn-success';
       const sellClass = 'btn btn-danger';
       const refreshClass = 'btn btn-warning';
       var showCoins = <TableData>-</TableData>;
       if(showBalance){
        showCoins = <TableData>{balance}</TableData>;
       }

        return (
           
            <tr>
                <TableData><a href={url} target="_blank" className={linkClass}>{name}</a></TableData>
                <TableData>{ticker}</TableData>
                <TableData>${price}</TableData>
                {showCoins}
                <TableData>
                <form action="#" method="POST">
                    <button onClick={handleClick} className={refreshClass}>Refresh</button>
                </form>
                </TableData>
                <TableData>
                    <form action="#" method="POST">
                        <Button style = {{"marginRight": '15px'}} onClick={handleBuy} className={buyClass}>
                            Buy</Button>
                        <Button onClick ={handleSell} className={sellClass}>Sell</Button>
                    </form>
                </TableData> 
                <TableData >
                    <PriceModal id = {id}/>
                </TableData>
            </tr>
        )
    
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};
export default Coin;