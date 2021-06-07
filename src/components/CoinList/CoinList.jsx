import React, { Component } from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const CoinTable = styled.table`
  margin: 50px auto 50px auto;
  display: inline-block;
  border: 1px solid blanchedalmond;
  border-collapse: collapse;
`;


export default class CoinList extends Component {
    render() {
        return (
            <CoinTable >
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Ticker</th>
                    <th>Price</th>
                    <th>Refresh</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.coinData.map( ({name,ticker,price}) => 
                    <Coin key = {ticker} name={name} ticker={ticker} price={price}/>
                    )
                    }
                </tbody>
        </CoinTable>
        )
    }
}
