import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useState } from 'react'
import styled from 'styled-components'
import { useAuthContext } from '../features/auth/context'
import { useThemeContext } from '../features/theme'
import useClickOutside, {
  useEcapeKeyPress
} from '../utils/hooks/useClickOutside'
import DropDownMenuItem from './DropDownMenuButton'
import User from './UserAvatar'

export default function DropdownMenu() {
  const themeContext = useThemeContext()
  const {
    themeState: { darkModeActive }
  } = themeContext

  const authContext = useAuthContext()
  const {
    authState: { isAuthenticated, user }
  } = authContext

  function toggleDarkMode() {
    themeContext.onDarkModeToggle()
  }

  const [showDropdown, setShowDropdown] = useState(false)
  function toggleDropdown() {
    setShowDropdown(!showDropdown)
  }

  const ref = useRef()
  useClickOutside(ref, () => setShowDropdown(false))
  useEcapeKeyPress(() => setShowDropdown(false))

  function logout() {
    authContext.onLogoutUser()
  }

  return (
    <div ref={ref}>
      <StyledShowDropdownToggle id="dropdown-toggle" onClick={toggleDropdown}>
        <FontAwesomeIcon icon={showDropdown ? 'times' : 'bars'} />
      </StyledShowDropdownToggle>

      {showDropdown && (
        <Container id="dropdown-menu" darkModeActive={darkModeActive}>
          <DropDownMenuItem
            onClick={toggleDarkMode}
            text="Dark Mode"
            icon={darkModeActive ? 'toggle-on' : 'toggle-off'}
          />

          {isAuthenticated && (
            <DropDownMenuItem
              onClick={logout}
              text="Logout"
              icon="sign-out-alt"
            />
          )}

          {isAuthenticated && <User user={user} />}
        </Container>
      )}
    </div>
  )
}

const Container = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  border-radius: 5px;
  padding: 0.3em;
  position: absolute;
  top: 5vh;
  right: 2%;

  background-color: ${(props) =>
    props.darkModeActive ? '#e3e3e3' : '#112222'};
  * {
    color: ${(props) => (props.darkModeActive ? '#121212' : '#c77905')};
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
`

const StyledShowDropdownToggle = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  font: inherit;
`
