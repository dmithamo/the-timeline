import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DefaultLayout from '../../components/DefaultLayout'
import AuthPage from '../auth'
import Docs from '../docs'
import FourOhFour from '../four-oh-four'
import Homepage from '../landing-page'
import TheTimeline from '../the-timeline'

export default function Routes() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/authenticate" component={AuthPage} />
          <Route exact path="/the-timeline" component={TheTimeline} />
          <Route exact path="/the-freaking-docs" component={Docs} />

          <Route path="*" component={FourOhFour} />
        </Switch>
      </DefaultLayout>
    </BrowserRouter>
  )
}
