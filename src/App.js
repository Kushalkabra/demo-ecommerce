
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Items from './Components/Items/Items';
import Brands from './Components/Brands/Brands';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  BrowserRouter
} from "react-router-dom";
import About from './Pages/About';
import Login from './Pages/Login';



function App() {
 
  return (
    <div >
      
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/items' element={<Items/>}></Route>
      <Route path='/login' element={<Login/>}></Route>


      
    </Routes>
      
    </BrowserRouter>
      
      

      
      <Footer/>
    </div>
  );
}

export default App;
