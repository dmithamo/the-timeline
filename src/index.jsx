import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faHome,
  faSignOutAlt,
  faTimes,
  faToggleOff,
  faToggleOn,
  faUserAlt
} from '@fortawesome/free-solid-svg-icons'
import ReactDOM from 'react-dom'
import App from './App'

library.add(
  faBars,
  faTimes,
  faHome,
  faToggleOff,
  faToggleOn,
  faSignOutAlt,
  faUserAlt
)
ReactDOM.render(<App />, document.getElementById('root'))
