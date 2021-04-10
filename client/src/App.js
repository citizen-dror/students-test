import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header.tsx';
import StudentsForm from './pages/StudentsForm.tsx';
import StudentsTable from './pages/StudentsTable.tsx';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
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
