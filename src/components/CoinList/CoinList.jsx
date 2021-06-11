import React from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const CoinTable = styled.table`
  margin: 50px auto 50px auto;
  display: inline-block;
  border: 1px solid blanchedalmond;
  border-collapse: collapse;
`;

const Th = styled.th`
border: 1px solid blanchedalmond;
padding-block: 15px;
`;

const CoinList  = ({coinData,refresh,showBalance,buy}) =>{
  
        return (
            <CoinTable>
                <thead>
                    <tr>
                    <Th>Ticker</Th>
                    <Th>Name</Th>
                    <Th>Price</Th>
                    {showBalance ? <Th>Balance</Th> : null}
                    <Th>Refresh</Th>
                    {showBalance ? <Th>Actions</Th> : null}
                    </tr>
                </thead>
                <tbody>
                    {coinData.map( ({key,name,ticker,price,balance}) => 
                    <Coin 
                       key = {key} 
                       id = {key}
                       name = {name} 
                       ticker = {ticker} 
                       price = {price} 
                       balance = {balance}
                       refresh = {refresh}
                       showBalance = {showBalance}
                       buy = {buy}
                    />
                    )
                    }
                </tbody>
        </CoinTable>
    )
}
export default CoinList;
