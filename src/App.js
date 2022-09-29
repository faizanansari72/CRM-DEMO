
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Forms from './components/Forms';
import Register from './components/Register';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
    
  <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Forms />}/>
      <Route path = '/Register' element = {<Register />}/>
      <Route path='/Dashboard' element = {<Dashboard/>}/>
      </Routes>
      </BrowserRouter>

      {/* <Forms/>
      <Register/> */}


     

    

    
 
    </div>
  );
}

export default App;
