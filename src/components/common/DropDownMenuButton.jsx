import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function DropdownMenuButton(props) {
  const { onClick, text, icon } = props

  return (
    <Container type="button" onClick={onClick}>
      <span>{text}</span>
      <span className="icon">
        <FontAwesomeIcon icon={icon} />
      </span>
    </Container>
  )
}

const Container = styled.button`
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
`

DropdownMenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}
