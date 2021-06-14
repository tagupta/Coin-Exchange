import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Button} from 'reactstrap';
import PriceModal from '../PriceModal/PriceModal';

const TableData = styled.td`
    border:2px solid #cccccc;
    width: 25vh;
    color : cornsilk;
`;

const Coin = ({id,name,ticker,price,balance,refresh,showBalance,buy,sell}) => {
   
  
   const handleClick = (event) => {
       event.preventDefault();
       refresh(id);
   } 
   const handleBuy = (event) =>{
    event.preventDefault();
    buy(id);
   }
   const handleSell = (event) =>{
    event.preventDefault();
    sell(id);
   }
       const url = `https://twitter.com/search?q=${name}`;

        return (
           
            <tr>
                <TableData><a href={url} target="_blank">{name}</a></TableData>
                <TableData>{ticker}</TableData>
                <TableData>${price}</TableData>
                {showBalance ? <TableData>{balance}</TableData> : null}
                <TableData>
                <form action="#" method="POST">
                    <Button onClick={handleClick}>Refresh</Button>
                </form>
                </TableData>
                {showBalance ? <TableData>
                                  <form action="#" method="POST">
                                        <Button style = {{"marginRight": '15px'}} onClick={handleBuy}>Buy</Button>
                                        <Button onClick ={handleSell}>Sell</Button>
                                  </form>
                               </TableData> : null }
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