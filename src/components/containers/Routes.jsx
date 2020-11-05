import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Homepage from './Homepage';
import AuthPage from './AuthPage';
import TheTimeline from './TheTimeline';
import Docs from './Docs';
import FourOhFour from './FourOhFour';

export default function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/authenticate" component={AuthPage} />
          <Route exact path="/the-timeline" component={TheTimeline} />
          <Route exact path="/the-freaking-docs" component={Docs} />

          <Route path="*" component={FourOhFour} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
