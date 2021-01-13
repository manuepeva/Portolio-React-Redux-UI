import React from "react"
import './index.scss'
import store from './Redux/store'
import { Provider } from 'react-redux'
import Login from "./Components/Login/Login"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Projects from "./Components/ProyectsPage/Projects"
import Education from "./Components/Education/Education"
import Contact from './Components/Contact/Contact'
import Ubication from './Components/Location/Ubication'
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <Provider
      store={store}
    >
      <Router>
        <Header />
        <Switch>
          <Route exact path={"/"} component={Login}/>
          <Route exact path={"/projects"} component={Projects}/>
          <Route exact path={"/education"} component={Education}/>
          <Route exact path={"/location"} component={Ubication}/>
          <Route exact path={"/contact"} component={Contact}/>
        </Switch>
        <Footer />
      </Router>
    </Provider >
  );
}

export default App;
