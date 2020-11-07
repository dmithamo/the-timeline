import { useAuth0 } from '@auth0/auth0-react'
import { NavLink, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { SignUpButton } from '../../components/AuthButtons'
import Logo from '../../components/Logo'
import Subtitle from '../../components/Subtitle'
import { useThemeContext } from '../theme'

export default function Homepage() {
  const themeContext = useThemeContext()
  const {
    themeState: { darkModeActive }
  } = themeContext

  const { isAuthenticated } = useAuth0()

  return isAuthenticated ? (
    <Redirect to="/the-timeline" />
  ) : (
    <>
      <Logo />
      <Subtitle />
      <StyledLinksContainer darkModeActive={darkModeActive}>
        <SignUpButton />
        <NavLink to="/the-freaking-docs" activeClassName="active-link">
          Find out more
        </NavLink>
      </StyledLinksContainer>
    </>
  )
}

const StyledLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-top: 5em;

  a {
    font-size: 1.2em;
    font-weight: 700;
    padding: 1.2em;
  }

  a#authenticate {
    text-decoration: none;
    background-color: ${(props) => (props.darkModeActive ? '#fff' : '#000')};
    color: ${(props) => (props.darkModeActive ? '#000' : '#fff')};
    border-radius: 5px;
  }
`
