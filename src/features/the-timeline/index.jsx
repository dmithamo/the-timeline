import { useAuth0 } from '@auth0/auth0-react'
import { Redirect } from 'react-router-dom'

export default function TheTimeline() {
  const { isAuthenticated } = useAuth0()

  return !isAuthenticated ? <Redirect to="/" /> : <h1>Working on it&reg;</h1>
}
