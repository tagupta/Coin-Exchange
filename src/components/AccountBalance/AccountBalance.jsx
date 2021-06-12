import React from 'react'
import PropTypes from 'prop-types';
import styled  from 'styled-components';
import helicopter from './helicopter.svg';
import {Button} from 'reactstrap';
import './AccountBalance.css';

const Section = styled.section`
    margin: 40px auto 20px auto;
    font-size: 1.3rem;
    color: #03f0fc;
    color : cornsilk;
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



const AccountBalance  = ({amount,showBalance,handleDisplay,handleBalance}) =>{
    const buttonText = showBalance ? 'Hide Balance':'Show Balance';
    let content = "",addBalance = "";
    if(showBalance){
        content = <Span>Balance : ${amount}</Span>
        addBalance = <Button onClick ={handleBalance} style={{'marginRight': '10px'}}><img className ='imageRotateHorizontal' src={helicopter} alt='Add Balance'/></Button>
    }
    return (
        <Section >
            {content}
            <div>
            {addBalance}
            <Button onClick = {handleDisplay} style={{height: "49px",cursor: "pointer"}}>{buttonText}</Button>
            </div>
            
        </Section>
    );
}
AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
};

export default AccountBalance;
