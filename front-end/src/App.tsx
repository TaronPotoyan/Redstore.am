import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/Login';
import Categories from './pages/categories';
import Smartphones from './pages/smartphone';
import Tablets from './pages/Tablets';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='/phons' element={<Smartphones/>} />
        <Route path='/Tablets' element={<Tablets/>} />
      </Routes>
    </Router>
  );
}

export default App;