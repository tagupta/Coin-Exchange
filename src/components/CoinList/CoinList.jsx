import React, { Component } from 'react';

import Coin from './components/Coin/Coin'

export default class CoinList extends Component {
    render() {
        return (
            <table className="Coin-table">
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
        </table>
        )
    }
}

