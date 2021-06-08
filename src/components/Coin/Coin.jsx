import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableData = styled.td`
    border:2px solid #cccccc;
    width: 25vh;
`;

export default class Coin extends Component {
   
   handleClick = (event) => {
       event.preventDefault();
       this.props.refresh(this.props.ticker);
   } 

    render() {
        return (
            <tr >
                <TableData>{this.props.name}</TableData>
                <TableData>{this.props.ticker}</TableData>
                <TableData>${this.props.price}</TableData>
                {this.props.showBalance ? <TableData>{this.props.balance}</TableData> : null}
                <TableData>
                <form action="#" method="POST">
                    <button onClick={this.handleClick}>Refresh</button>
                </form>
                </TableData>
            </tr>
        )
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};