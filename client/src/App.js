import './Styles/App.css';
import { Routes, Route} from 'react-router-dom';
import { Home, About, Login, Signup } from './components/index.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
