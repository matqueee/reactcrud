import './App.css';
import Read from './components/Read';
import Update from './components/Update';
import Create from './components/Create';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <Routes>
          <Route path='/create' element={<Create />} />
          <Route path='/read' element={<Read />} />
          <Route path='/update' element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
