import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../common/Logo';
import Subtitle from '../common/Subtitle';

export default function Homepage() {
  return (
    <Container>
      <Logo />
      <Subtitle />
      <AuthButtons>
        <NavLink to="/" activeClassName="active-link">
          Sign in
        </NavLink>
        <NavLink id="create-account" to="/" activeClassName="active-link">
          Create an account
        </NavLink>
      </AuthButtons>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AuthButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5em;

  a {
    color: #000;
    font-weight: 700;
    padding: 1.2em;
  }

  a#create-account {
    text-decoration: none;
    background-color: #000;
    color: #fff;
    border-radius: 5px;
  }
`;
