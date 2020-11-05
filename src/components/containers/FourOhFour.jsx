import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useThemeContext } from '../../contexts/theme'

export default function FourOhFour () {
  const themeContext = useThemeContext()
  const {
    themeState: { darkModeActive }
  } = themeContext

  return (
    <Container darkModeActive={darkModeActive}>
      <h1>404</h1>
      <p>Nothing to see here. You&apos;re lost.</p>
      <NavLink to='/'>Find thyself</NavLink>
    </Container>
  )
}

const Container = styled.div`
  font-weight: 700;
  font-size: 1.2em;
  h1 {
    font-size: 2.2em;
    filter: opacity(0.8);
  }

  p {
    filter: opacity(0.9);
    margin: 3em 0;
  }

  a {
    font-size: 1.3rem;
    padding: 0.9em;
    text-decoration: none;
    background-color: ${(props) => (props.darkModeActive ? '#fff' : '#000')};
    color: ${(props) => (props.darkModeActive ? '#000' : '#fff')};
    border-radius: 7px;
  }
`
