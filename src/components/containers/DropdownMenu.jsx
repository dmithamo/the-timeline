import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useThemeContext } from '../../contexts/theme';

export default function DropdownMenu() {
  const themeContext = useThemeContext();
  const {
    themeState: { darkModeActive },
  } = themeContext;

  function toggleDarkMode() {
    themeContext.onDarkModeToggle();
  }

  return (
    <Container darkModeActive={darkModeActive}>
      <button type="button" onClick={toggleDarkMode}>
        <span>Dark Mode</span>
        <span className="icon">
          <FontAwesomeIcon icon={darkModeActive ? 'toggle-on' : 'toggle-off'} />
        </span>
      </button>
    </Container>
  );
}

const Container = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  border-radius: 5px;
  padding: 0.3em;
  position: absolute;
  top: 5vh;
  right: 2%;

  background-color: ${(props) => (props.darkModeActive ? '#fff' : '#121212')};
  * {
    color: ${(props) => (props.darkModeActive ? '#000' : '#fff')};
  }

  button {
    border: none;
    outline: none;
    background: none;
    font: inherit;
    width: 100%;
    padding: 0.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    filter: opacity(0.8);

    span.icon {
      font-size: 1.5em;
    }

    :hover {
      filter: opacity(1);
      font-weight: 700;
    }
  }

  transition: all ease 0.7s;
`;
