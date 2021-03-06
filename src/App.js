import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import LogIn from "./context/logs/LogSesion";
import Register from "./views/Log-In-Form//register.js"
import Home from "./views/home/Home.js"
import Tasks from "./context/others/data/tasks";

function App() {

  return (
    <LogIn>
      <Tasks>
        <Router>
            <Switch>
              <Route exact path='/'>
                  <Register/>
              </Route>
              <Route exact path='/home'>
                <Home charging={true}></Home>
              </Route>
            </Switch>
        </Router>
     </Tasks>
     </LogIn>
  );
}

export default App;