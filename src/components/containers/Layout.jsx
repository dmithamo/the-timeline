import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Nav from './Nav';
import { useThemeContext } from '../../contexts/theme';

export default function Layout({ children }) {
  const themeContext = useThemeContext();
  const {
    themeState: { darkModeActive },
  } = themeContext;

  return (
    <MainContainer darkModeActive={darkModeActive}>
      <Nav />
      {children}
    </MainContainer>
  );
}

const MainContainer = styled.section`
  color: ${(props) => (props.darkModeActive ? '#fff' : '#000')};
  background-color: ${(props) => (props.darkModeActive ? '#000' : '#fff')};

  a,
  button {
    color: ${(props) => (props.darkModeActive ? '#fff' : '#000')};
    filter: opacity(0.9);

    :hover {
      filter: opacity(1);
      font-weight: 700;
    }
  }

  transition: all ease 0.7s;
`;

Layout.propTypes = {
  children: PropTypes.any,
};

Layout.defaultProps = {
  children: null,
};
