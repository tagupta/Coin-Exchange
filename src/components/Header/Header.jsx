import React, { Component } from 'react';
import logo from './logo.svg';
import styled, {keyframes} from 'styled-components';

const AppHeader = styled.header`
  background-color: #000000;
  min-height: 25vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
`;

const H1 = styled.h1`
    font-size: 36px;
`;

const App_logo_spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;
  
const Img = styled.img`
    height: 20vmin;
    pointer-events: none;
    @media (prefers-reduced-motion: no-preference) {
        animation: ${App_logo_spin} infinite 20s linear;
      
    }
`;

export default class Header extends Component {
    render() {
        return (
            <AppHeader>
                <Img src={logo} className="App-logo" alt="logo" />
                <H1>
                   {this.props.title}
                </H1>
            </AppHeader>
        );
    }
}

