import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import StarWarsList from "./components/StarWarsList"
import StarWarsDetails from "./components/StarWarsDetails";
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <StarWarsList />
          </Route>
          <Route path="/detail/:id" exact>
            <StarWarsDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  )

}

export default App;
