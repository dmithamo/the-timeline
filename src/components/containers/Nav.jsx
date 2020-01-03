import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Nav() {
  return (
    <Container>
      <NavLink to="/" activeClassName="active-link">
        Home
      </NavLink>
      <NavLink to="/" activeClassName="active-link">
        <FontAwesomeIcon icon="bars" />
      </NavLink>
    </Container>
  );
}

const Container = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  font-weight: 700;
  font-size: 1.4em;

  position: absolute;
  top: 0;
  z-index: 1000;

  a {
    text-decoration: none;
  }

  a.active-link,
  a:hover {
    text-decoration: underline;
  }
`;

const StyledButton = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  font: inherit;
`;
