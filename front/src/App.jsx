import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Users from './Components/Users';
import { useHistory } from 'react-router-dom';

const App = () => {
  const history = useHistory();
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/users">USERS</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
