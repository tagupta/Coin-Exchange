import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableData = styled.td`
    border:2px solid #cccccc;
    width: 25vh;
`;

export default class Coin extends Component {
    constructor(props){
       super(props);
       this.state = {
           price: this.props.price
       };
       this.handleClick = this.handleClick.bind(this);
    }
    /*
    componentDidMount(){
       const callBack = () =>{
         var randomPercentage = 0.995 + Math.random() * 0.01;
         this.setState(function(oldState){
            return {
                price: oldState.price * randomPercentage
            };
         });

       }
       setInterval(callBack,1000);
   }*/
   handleClick(event){
       event.preventDefault();
       var randomPercentage = 0.995 + Math.random() * 0.01;
       this.setState(function(oldState){
          return {
              price: oldState.price * randomPercentage
          };
       });
   }

    render() {
        return (
            <tr >
                <TableData>{this.props.name}</TableData>
                <TableData>{this.props.ticker}</TableData>
                <TableData>${this.state.price}</TableData>
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