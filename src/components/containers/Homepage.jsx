import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../common/Logo';
import Subtitle from '../common/Subtitle';
import { useThemeContext } from '../../contexts/theme';

export default function Homepage() {
  const themeContext = useThemeContext();
  const {
    themeState: { darkModeActive },
  } = themeContext;
  return (
    <Container>
      <Logo />
      <Subtitle />
      <AuthButtons darkModeActive={darkModeActive}>
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
    font-weight: 700;
    padding: 1.2em;
  }

  a#create-account {
    text-decoration: none;
    background-color: ${(props) => (props.darkModeActive ? '#fff' : '#000')};
    color: ${(props) => (props.darkModeActive ? '#000' : '#fff')};
    border-radius: 5px;
  }
`;
