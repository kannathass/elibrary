import './App.css';
import Header from './components/Header/Header';
import "./assets/font-awesome/css/font-awesome.min.css";
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import About from './components/About/About';
import PriceCard from './components/PriceCard/PriceCard';
import AddBook from './components/AddBook/AddBook';
import RulesAndRegulations from './components/RulesAndRegulations/RulesAndRegulations';
import Search from './components/Search/Search';
import ConfirmationModal from './components/Modal/ConfirmationModal';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/PriceCard' element={<PriceCard />}></Route>
        <Route path='/AddBook' element={<AddBook />}></Route>
        <Route path='/RulesAndRegulations' element={<RulesAndRegulations />}></Route>
        <Route path='/Search' element={<Search />}></Route>
      </Routes>
      
      </BrowserRouter>
      {/* <Home />
      <Login />
      <Signup />
      <About />
      <PriceCard />
      <AddBook />
      <RulesAndRegulations />
      <Search /> */}
      {/* <ConfirmationModal /> */}
    </div>
  );
}

export default App;
