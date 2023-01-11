import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Account from './pages/Account';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path = '/login' element = {<SignIn/>} />
        <Route path='/signup' element ={<SignUp/>} />
        <Route path='/account' element = {<ProtectedRoute><Account/></ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default App;
