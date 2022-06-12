import './App.css'
import Home from './pages/Home';
import Menu from './components/Menu';
import Nav from './components/Nav';
import Mypage from './pages/Mypage';
import Cart from './pages/Cart';
import Tour from './pages/Tour';
import { useDispatch, useSelector } from "react-redux"
import { Routes, Route, Link } from 'react-router-dom'
import Ticket from './pages/Ticket';

function App() {
  let cart = useSelector((state) => state.cart);

  return (
    <div className="App">
      <Nav></Nav>
      <Menu></Menu>
      <Routes>
        <Route path='/' element={ <Home></Home> }></Route>
        <Route path='/tour' element={ <Tour></Tour> }></Route>
        <Route path='/mypage' element={ <Mypage></Mypage> }></Route>
        <Route path='/cart' element={ <Cart></Cart> }></Route>
        <Route path='/ticket' element={ <Ticket></Ticket> }></Route>
      </Routes>
    </div>
  );
}

export default App;
