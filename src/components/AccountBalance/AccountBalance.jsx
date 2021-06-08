import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Section = styled.section`
    margin: 40px auto 20px auto;
    font-size: 1.3rem;
    color: #03f0fc;
    background-color: black;
    padding: 10px;
    border: 1px solid #c3c3c3;
    width: fit-content;
    line-height: 0.75em;
`;

const Span = styled.span`
     margin-right: 10px;
`;

export default class AccountBalance extends Component {
  
    render() {
        const buttonText = this.props.showBalance ? 'Hide Balance':'Show Balance';
        let content = "";
        if(this.props.showBalance){
            content = <Span>Account Balance: ${this.props.amount}</Span>
        }
        return (
            <Section >
                {content}
                <button onClick = {this.props.handleDisplay}>{buttonText}</button>
            </Section>
        );
    }
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
};
