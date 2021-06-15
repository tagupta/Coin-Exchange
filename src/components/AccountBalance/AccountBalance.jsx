import React from 'react'
import PropTypes from 'prop-types';
import styled  from 'styled-components';
// import helicopter from './helicopter.svg';

import './AccountBalance.css';


const Section = styled.section`
    font-size: 1.3rem;
    padding: 10px;
    width: fit-content;
    line-height: 0.75em;
    text-align: center;
    display: inline-block;
    
`;
const Button = styled.button`
    margin : 0 8px;
`;

const Span = styled.span`
     margin-right: 10px;
     color : Black;
`;

const Balance = styled.div`
  min-width : 250px;
  margin : 0.5rem 0 0 2.5rem;
  font-size : 1.5rem;
  verticle-align : middle;
  text-align : left;

`;
const formatter = Intl.NumberFormat('en-US',{
    style:'currency',
    currency : 'USD'

})

const AccountBalance  = ({amount,showBalance,handleDisplay,handleBalance}) =>{
    const buttonText = showBalance ? 'Hide Balance':'Show Balance';
    let content = '\u00A0',addBalance = "";
    const buttonClass = 'btn' + (showBalance ? ' btn-warning':' btn-info');
    const heliClass = 'btn' + ' btn-success';
    if(showBalance){
        content = <Span>Wallet Balance : {formatter.format(amount)}</Span>
        addBalance = <Button onClick ={handleBalance} style={{'marginRight': '10px'}} className={heliClass}>
                          {/* <img className ='imageRotateHorizontal' src={helicopter} alt='Add Balance'/> */}
                          <i className ="fas fa-helicopter"></i>
                     </Button>
    }
    return (
        <>
        <Balance>{content}</Balance>
        <Section>
           
    
            <Button onClick = {handleDisplay}  className={buttonClass} style={{'width':'150px'}}>
                {buttonText}
            </Button>
            {addBalance}
          
        </Section>
        </>
    );
}
AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
};

export default AccountBalance;
