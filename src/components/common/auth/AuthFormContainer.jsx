import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useThemeContext } from '../../../contexts/theme'

export default function AuthFormContainer (props) {
  const themeContext = useThemeContext()
  const {
    themeState: { darkModeActive }
  } = themeContext

  const { children } = props
  return <Container darkModeActive={darkModeActive}>{children}</Container>
}

AuthFormContainer.propTypes = {
  children: PropTypes.any.isRequired
}

const Container = styled.div`
  background-color: ${(props) =>
    props.darkModeActive ? '#112222' : '#ffffff40'};

  color: ${(props) => (props.darkModeActive ? '#c77905' : '#121212')};

  h2 {
    font-size: 1.8em;
    margin: 0;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1.2em 4em;
  height: 40vh;
  width: 500px;
  font-size: 1.2em;
  font-weight: 700;
  border-radius: 5px;

  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.5);

  form,
  p {
    padding: 0 1.2em;
  }
  label {
    display: flex;
    flex-direction: column;

    input {
      margin-top: 1.2em;
      width: 100%;
      font: inherit;
      padding: 0.9em;
      outline: none;
      border: 1px solid #00000030;
      border-radius: 3px;

      :focus {
        border: 1px solid #000000;
      }
    }
  }
`
