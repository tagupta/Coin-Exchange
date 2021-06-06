
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
`;

export default class AccountBalance extends Component {
    render() {
        return (
            <Section className="balance">
             Account Balance: ${this.props.amount}
            </Section>
        );
    }
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
};
