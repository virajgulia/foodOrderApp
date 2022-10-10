import './App.css';
import Count from './componants/Count/Count';
import Mainfood from './componants/Foodmainpage/Mainfood';
import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react';
import { AppContext } from './Appcontext';
import Mainhomefile from './componants/Mainhomefile';
import Buysec from './componants/Buysec/Buysec';
import Header from './componants/Header/Header';
import Cart from './componants/Cart/Cart';
function App() {
  let fooddata = useContext(AppContext)
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Mainhomefile />} />
        <Route path='/home' element={<Count />} />
        <Route path='/breakfast' element={<Mainfood dt={fooddata.breakfast} cat='breakfast' />} />
        <Route path='/lunch' element={<Mainfood dt={fooddata.lunch} cat='lunch' />} />
        <Route path='/dinner' element={<Mainfood dt={fooddata.dinner} cat='dinner' />} />
        <Route path='/desserts' element={<Mainfood dt={fooddata.desserts} cat='desserts' />} />
        <Route path='/buysec' element={<Buysec />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
