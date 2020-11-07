import { Auth0Provider } from '@auth0/auth0-react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

  const history = useHistory()

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname)
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      onRedirectCallback={onRedirectCallback}
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  )
}
Auth0ProviderWithHistory.propTypes = {
  children: PropTypes.node.isRequired
}
export default Auth0ProviderWithHistory
