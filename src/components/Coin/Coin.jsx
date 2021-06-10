import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableData = styled.td`
    border:2px solid #cccccc;
    width: 25vh;
`;

 const Coin = ({id,name,ticker,price,balance,refresh,showBalance}) => {
   
   const handleClick = (event) => {
       event.preventDefault();
       refresh(id);
   } 

    
        return (
            <tr >
                <TableData>{name}</TableData>
                <TableData>{ticker}</TableData>
                <TableData>${price}</TableData>
                {showBalance ? <TableData>{balance}</TableData> : null}
                <TableData>
                <form action="#" method="POST">
                    <button onClick={handleClick}>Refresh</button>
                </form>
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