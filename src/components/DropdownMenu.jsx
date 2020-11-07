import { useAuth0 } from '@auth0/auth0-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useState } from 'react'
import styled from 'styled-components'
import { useThemeContext } from '../features/theme'
import useClickOutside, {
  useEcapeKeyPress
} from '../utils/hooks/useClickOutside'
import AuthButtons from './AuthButtons'
import { OutlineButton } from './button'
import User from './UserAvatar'

export default function DropdownMenu() {
  const themeContext = useThemeContext()
  const { themeState: theme } = themeContext
  const { isAuthenticated, user } = useAuth0()

  // function toggleDarkMode() {
  //   themeContext.onDarkModeToggle()
  // }

  const [showDropdown, setShowDropdown] = useState(false)
  function toggleDropdown() {
    setShowDropdown(!showDropdown)
  }

  const ref = useRef()
  useClickOutside(ref, () => setShowDropdown(false))
  useEcapeKeyPress(() => setShowDropdown(false))

  return (
    <div ref={ref}>
      <StyledShowDropdownToggle id="dropdown-toggle" onClick={toggleDropdown}>
        <FontAwesomeIcon icon={showDropdown ? 'times' : 'bars'} />
      </StyledShowDropdownToggle>

      {showDropdown && (
        <Container id="dropdown-menu" theme={theme}>
          <OutlineButton theme={theme} onClick={() => {}}>
            <FontAwesomeIcon
              icon={theme.darkModeActive ? 'toggle-on' : 'toggle-off'}
            />
            <span>Dark mode is {theme.darkModeActive ? 'on' : 'off'}</span>
          </OutlineButton>

          {isAuthenticated && <User user={user} />}
          <AuthButtons />
        </Container>
      )}
    </div>
  )
}

const Container = styled.div`
  width: 250px;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  border-radius: 5px;
  padding: 0.75em;
  position: absolute;
  top: 5vh;
  right: 2%;

  box-shadow: var(--modalShadow);

  background-color: ${(props) =>
    props.theme.darkModeActive ? 'var(--darkThemeBG)' : 'var(--lightThemeBG)'};
`

const StyledShowDropdownToggle = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  font: inherit;
`
