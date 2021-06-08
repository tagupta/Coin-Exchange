import React, { Component } from 'react';
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

`;

export default class CoinList extends Component {
  
    render() {
        return (
            <CoinTable >
                <thead>
                    <tr>
                    <Th>Ticker</Th>
                    <Th>Name</Th>
                    <Th>Price</Th>
                    {this.props.showBalance ? <Th>Balance</Th> : null}
                    <Th>Action</Th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.coinData.map( ({name,ticker,price,balance}) => 
                    <Coin 
                       key = {ticker} 
                       name = {name} 
                       ticker = {ticker} 
                       price = {price} 
                       balance = {balance}
                       refresh = {this.props.refresh}
                       showBalance = {this.props.showBalance}
                    />
                    )
                    }
                </tbody>
        </CoinTable>
        )
    }
}
