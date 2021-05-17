import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { WebView, Resume} from "./modules";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={WebView}/>
        <Route exact path='/resume' component={Resume}/>
      </Switch>
    </Router>
  );
}

export default App;
