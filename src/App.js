import BrowserRouter, { Route, Routes } from 'react-router-dom'
import './App.css';
import About from './components/about/About';
import ChatSec from './components/chatSec/ChatSec';
import Register from './components/register/Register';
import ShowTicket from './components/showTicket/ShowTicket';

function App() {
  return (
    <div >
      <ShowTicket/>
      {/* <BrowserRouter>
        <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/regLog" element={<Register/>} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
