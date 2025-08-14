import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Order from './components/cutomers/Order';
import Reviews from './components/cutomers/Reviews';

function App() {
  

  return (
   <div className='App'>
    <Navbar></Navbar>
    <Home></Home>
    <Reviews></Reviews>
<Footer></Footer>

   </div>
  );
}

export default App;
