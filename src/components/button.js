// This only contans styling for buttons
// Think of these as wrappers around the normal <button> component

import styled from 'styled-components'

export const PrimaryButton = styled.button`
  width: 100%;
  outline: none;
  border: none;
  padding: 0.85em 1.5em;
  border-radius: 5px;
  font: inherit;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0.85;

  svg {
    font-size: 1.5em;
  }

  background-color: ${(props) =>
    props.theme.darkModeActive ? 'var(--lightThemeBG)' : 'var(--darkThemeBG)'};

  color: ${(props) =>
    props.theme.darkModeActive ? 'var(--darkThemeBG)' : 'var(--lightThemeBG)'};

  :hover {
    opacity: 1;
  }

  transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
`

export const SecondaryButton = styled(PrimaryButton)`
  background-color: var(--grey);
  color: var(--black);
`

export const DangerButton = styled(PrimaryButton)`
  background-color: var(--red);
  color: var(--offWhite);
`

export const OutlineButton = styled(PrimaryButton)`
  border: ${(props) =>
    props.theme.darkModeActive
      ? '1px solid var(--lightThemeBG)'
      : '1px solid var(--darkThemeBG)'};

  color: ${(props) =>
    props.theme.darkModeActive
      ? 'var(--darkThemeTextColor)'
      : 'var(--lightThemeTextColor)'};
  background: none;
`

export const LinkButton = styled(PrimaryButton)`
  background-color: none;
  text-decoration: underline;
`
