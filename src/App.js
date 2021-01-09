import React from "react"
import './index.scss'
import Header from "./Components/Header/Header"
import Banner from './Components/Banner/Banner'
import ReduxCom from "./Components/ReduxCom/ReduxCom"
import Footer from './Components/Footer/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import ProjectsCmp from "./Components/Projects/ProjectsCmp"
import Education from "./Components/Education/Education"
import store from './Redux/store'
import { Provider } from 'react-redux'
import CallToAction from "./Components/Cta/CallToAction"
import Projects from './Components/ProyectsPage/Projects'

function App() {
  return (
    <Provider
      store={store}
    >
      <div>
        <Router>
          <Route exact path="/">
            <div className="landingP">
              <Header />
              <Banner />
            </div>
          </Route>
          <Route exact path="/">
            <div className="redux-section">
              <ReduxCom />
            </div>
            <ProjectsCmp />
            <CallToAction />
          </Route>
        </Router>
      </div>
      <Footer />
      <Router>
        <Switch>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/Education">
            <Education />
          </Route>
        </Switch>
      </Router>
    </Provider >
  );
}

export default App;
