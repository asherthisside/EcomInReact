import './App.css';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;