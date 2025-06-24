import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/Login';
import Categories from './pages/categories';
import Smartphones from './pages/smartphone';
import Tablets from './pages/Tablets';
import RegistrationPage from './pages/registeration';
import Sepctial_Product from './pages/product_id';
import Reset from './pages/RESET';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='/phons' element={<Smartphones/>} />
        <Route path='/Tablets' element={<Tablets/>} />
        <Route path='/registration' element={<RegistrationPage/>} />
        <Route path='/products/:_id' element={<Sepctial_Product/>} />
        <Route path='/reset' element={<Reset/>}/>
      </Routes>
    </Router>
  );
}

export default App;

