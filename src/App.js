import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Presentation from './pages/Presentation';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Leaderboard from './pages/Leaderboard';
import Chat from './pages/Chat';
import Reward from './pages/Reward';
import Levels from './pages/RewardsPages/Levels';
import Referals from './pages/RewardsPages/Referals';
import Earn from './pages/RewardsPages/Earn';
import Lottery from './pages/RewardsPages/Lottery';
import { UserProvider } from "./services/UserContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
            <Route index element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/presentation' element={<Presentation />} />
            <Route path='/leaderboard' element={<Leaderboard />} /> 
            <Route path='/chat' element={<Chat />} />   
            <Route path='/reward' element={<Reward />} />
            <Route path='/reward/levels' element={<Levels />} />      
            <Route path='/reward/referals' element={<Referals />} />      
            <Route path='/reward/earn' element={<Earn />} /> 
            <Route path='/reward/lottery' element={<Lottery />} />                  
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
