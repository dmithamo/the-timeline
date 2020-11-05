import DefaultLayout from '../../components/DefaultLayout'
import AuthPage from '../auth'
import Docs from '../docs'
import FourOhFour from '../four-oh-four'
import Homepage from '../landing-page'
import TheTimeline from '../the-timeline'

// all the routes
const allTheRoutes = [
  {
    name: 'docs',
    path: '/the-freaking-docs',
    component: Docs,
    needsAuth: false,
    exact: true,
    layout: DefaultLayout
  },
  {
    name: 'home',
    path: '/',
    component: Homepage,
    needsAuth: false,
    exact: true,
    layout: DefaultLayout
  },
  {
    name: 'timeline',
    path: '/the-timeline',
    component: TheTimeline,
    needsAuth: true,
    exact: true,
    layout: DefaultLayout
  },
  {
    name: 'auth',
    path: '/authenticate',
    component: AuthPage,
    needsAuth: false,
    exact: true,
    layout: DefaultLayout
  },
  {
    name: 'four-oh-four',
    path: '*',
    component: FourOhFour,
    needsAuth: false,
    exact: false,
    layout: DefaultLayout
  }
]
export default allTheRoutes
