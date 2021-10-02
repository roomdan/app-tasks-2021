import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import LogIn from "./context/logs/LogSesion";
import Register from "./views/Log-In-Form//register.js"
import Home from "./views/home/Home.js"

function App() {

  return (
     <Router>
         <Switch>
           <LogIn>
           <Route exact path='/'>
              <Register/>
           </Route>
           <Route exact path='/home'>
             <Home charging={true}></Home>
           </Route>
           </LogIn>
         </Switch>
     </Router>
  );
}

export default App;