import './App.css';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import { createContext, useState } from 'react';

// Create | Provider | UseContext
// Login | LoggedIn 

// export const loginContext = createContext()

function App() {
  const [loggedIn, setLoggedIn] = useState(true)
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