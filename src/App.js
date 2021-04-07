import './App.css';

import StudentsForm from './components/StudetsForm.tsx';
import StudentsTable from './components/StudentsTable.tsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        <StudentsForm />
        <StudentsTable />
      </div>
    </div>
  );
}

export default App;
