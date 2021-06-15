import React from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';
import {Table} from 'reactstrap';

const Th = styled.th`
border: 1px solid blanchedalmond;
padding-block: 15px;
vertical-align: middle;

`;

const CoinList  = ({coinData,refresh,showBalance,handleBuying_selling}) =>{
  
        return (
            <Table striped bordered hover   style={{marginTop:'50px'}}>
                <thead>
                    <tr>
                    <Th>Ticker</Th>
                    <Th>Name</Th>
                    <Th>Price</Th>
                    <Th>Coins</Th>
                    <Th>Refresh</Th>
                    <Th>Actions</Th>
                    <Th>Daily Market cap.</Th>
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
                       handleBuying_selling = {handleBuying_selling}
                       
                    />
                    )
                    }
                </tbody>
        </Table>
    )
}
export default CoinList;
