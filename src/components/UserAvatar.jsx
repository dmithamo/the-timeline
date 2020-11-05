import PropTypes from 'prop-types'
import DropDownMenuButton from './DropDownMenuButton'

export default function User(props) {
  const { user } = props
  const name = `${user.firstname}. ${user.lastname}`

  return <DropDownMenuButton onClick={() => {}} text={name} icon="user-alt" />
}

User.propTypes = {
  user: PropTypes.any.isRequired
}
