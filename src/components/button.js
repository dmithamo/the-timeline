// This only contans styling for buttons
// Think of these as wrappers around the normal <button> component

import styled from 'styled-components'

export const PrimaryButton = styled.button`
  outline: none;
  border: none;
  padding: 1em 0.75em;
  border-radius: 5px;
  font: inherit;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    font-size: 1.2em;
  }

  background-color: ${(props) =>
    props.theme.darkModeActive ? 'var(--lightThemeBG)' : 'var(--darkThemeBG)'};

  color: ${(props) =>
    props.theme.darkModeActive ? 'var(--darkThemeBG)' : 'var(--lightThemeBG)'};

  :hover {
    filter: brightness(105%);
  }
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
    `1 px solid ${
      props.theme.darkModeActive
        ? 'var(--lightThemeTextColor)'
        : 'var(--darkThemeTextColor)'
    }`};
`

export const LinkButton = styled(PrimaryButton)`
  background-color: none;
  text-decoration: underline;
`
