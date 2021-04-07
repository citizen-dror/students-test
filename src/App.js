import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import StudentsForm from './components/StudetsForm.tsx';
import StudentsTable from './components/StudentsTable.tsx';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/form">Students Form</Link>
              </li>
              <li>
                <Link to="/table">Students Table</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/form">
              <StudentsForm />
            </Route>
            <Route path="/table">
              <StudentsTable />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
function Home() {
  return <h2>Home</h2>;
}

export default App;
