import logo from './logo.svg';
import './App.css';
import FormPage from './Formpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './NavBar';
import Tablepage from './Tablepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<FormPage />} />
          <Route path='/table' element={<Tablepage />} />
          <Route path='/edit/:id' element={<FormPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
