import { Redirect, Route, Switch } from 'react-router-dom'
import allTheRoutes from './allTheRoutes'

export default function Routes() {
  return (
    <Switch>
      {allTheRoutes.map(
        ({
          name,
          path,
          exact,
          needsAuth,
          layout: Layout,
          component: Component
        }) => (
          <Route
            key={name}
            render={() =>
              needsAuth && 1 % 3 === 0 ? (
                <Redirect to="/" />
              ) : (
                <Layout>
                  <Component />
                </Layout>
              )
            }
            path={path}
            exact={exact}
          />
        )
      )}
    </Switch>
  )
}
