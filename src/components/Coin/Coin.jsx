import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Button} from 'reactstrap';

const TableData = styled.td`
    border:2px solid #cccccc;
    width: 25vh;
    color : cornsilk;
`;
// const Button = styled.button`
//    font-size: initial;
// `;
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
       
        return (
           
            <tr>
                <TableData>{name}</TableData>
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
            </tr>
        )
    
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};
export default Coin;