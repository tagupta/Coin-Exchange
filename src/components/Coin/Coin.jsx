import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableData = styled.td`
    border:2px solid #cccccc;
    width: 25vh;
    padding-block: 10px;
`;
const Button = styled.button`
  cursor : pointer;
  padding-block: 5px;
`;
 const Coin = ({id,name,ticker,price,balance,refresh,showBalance,buy}) => {
   
   const handleClick = (event) => {
       event.preventDefault();
       refresh(id);
   } 
   const handleBuy = (event) =>{
    event.preventDefault();
    buy(id);
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
                                        <Button >Sell</Button>
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