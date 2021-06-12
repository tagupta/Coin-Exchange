import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import helicopter from './helicopter.svg';
import {Button} from 'reactstrap';

const Section = styled.section`
    margin: 40px auto 20px auto;
    font-size: 1.3rem;
    color: #03f0fc;
    background-color: black;
    padding: 10px;
    border: 1px solid #c3c3c3;
    width: fit-content;
    line-height: 0.75em;
    align-items: center;
    display: flex;
    justify-content: center;
`;

const Span = styled.span`
     margin-right: 10px;
`;
const Img = styled.img`
height: 35px;

`;
// const BalanceButton = styled.button`
// margin-right: 10px;
// cursor: pointer;
// `;
const AccountBalance  = ({amount,showBalance,handleDisplay,handleBalance}) =>{
    const buttonText = showBalance ? 'Hide Balance':'Show Balance';
    let content = "",addBalance = "";
    if(showBalance){
        content = <Span>Balance : ${amount}</Span>
        addBalance = <Button onClick ={handleBalance}><Img src={helicopter} alt='Add Balance'/></Button>
    }
    return (
        <Section >
            {content}
            {addBalance}
            <Button onClick = {handleDisplay} style={{height: "42px",cursor: "pointer"}}>{buttonText}</Button>
        </Section>
    );
}
AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
};

export default AccountBalance;
