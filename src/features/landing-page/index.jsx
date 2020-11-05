import { NavLink, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../components/Logo'
import Subtitle from '../../components/Subtitle'
import { useAuthContext } from '../auth/context'
import { useThemeContext } from '../theme'

export default function Homepage() {
  const themeContext = useThemeContext()
  const {
    themeState: { darkModeActive }
  } = themeContext

  const authContext = useAuthContext()
  const {
    authState: { isAuthenticated }
  } = authContext

  return isAuthenticated ? (
    <Redirect to="/the-timeline" />
  ) : (
    <>
      <Logo />
      <Subtitle />
      <AuthButtons darkModeActive={darkModeActive}>
        <NavLink to="/the-freaking-docs" activeClassName="active-link">
          Find out more
        </NavLink>
        <NavLink
          id="authenticate"
          to="/authenticate"
          activeClassName="active-link"
        >
          Get started. It&apos;s free
        </NavLink>
      </AuthButtons>
    </>
  )
}

const AuthButtons = styled.div`
  display: flex;
  justify-content: space-between;
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
