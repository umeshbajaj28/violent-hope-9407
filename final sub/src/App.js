import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Login from './Component/Login';
import Allroutes from './Context/Allroutes';

function App() {
  return (
    <>
    <Navbar></Navbar>
   <Allroutes></Allroutes>

    </>
     
  );
}

export default App;
