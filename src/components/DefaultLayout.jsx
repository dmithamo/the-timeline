import PropTypes from 'prop-types'
import styled from 'styled-components'
import Nav from '../features/navbar'
import { useThemeContext } from '../features/theme'

export default function Layout({ children }) {
  const themeContext = useThemeContext()
  const {
    themeState: { darkModeActive }
  } = themeContext

  return (
    <MainContainer darkModeActive={darkModeActive}>
      <Nav />
      {children}
    </MainContainer>
  )
}

const MainContainer = styled.section`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${(props) => (props.darkModeActive ? '#e3e3e3' : '#121212')};
  background-color: ${(props) =>
    props.darkModeActive ? '#112222' : '#ffffff40'};

  a,
  button {
    color: ${(props) => (props.darkModeActive ? '#c77905' : '#121212')};
    filter: opacity(0.9);

    :hover {
      filter: opacity(1);
      font-weight: 700;
    }
  }

  transition: all ease 0.3s;
`

Layout.propTypes = {
  children: PropTypes.any
}

Layout.defaultProps = {
  children: null
}
