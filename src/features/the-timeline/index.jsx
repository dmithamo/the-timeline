import { Redirect } from 'react-router-dom'
import { useAuthContext } from '../auth/context'

export default function TheTimeline() {
  const authContext = useAuthContext()
  const {
    authState: { isAuthenticated }
  } = authContext

  return !isAuthenticated ? <Redirect to="/" /> : <h1>Working on it&reg;</h1>
}
