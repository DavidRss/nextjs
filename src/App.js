import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Presentation from "./pages/Presentation";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Leaderboard from "./pages/Leaderboard";
import Chat from "./pages/Chat";
import Reward from "./pages/Reward";
import LevelsView from "./pages/RewardsPages/LevelsView";
import Referals from "./pages/RewardsPages/Referals";
import Earn from "./pages/RewardsPages/Earn";
import Lottery from "./pages/RewardsPages/Lottery";
import { AppProvider } from "./services/AppContext";
import AuthRoute from "./route/AuthRoute";

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route
            index
            element={
              <AuthRoute>
                <Presentation />
              </AuthRoute>
            }
          />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/presentation" element={<Presentation />} /> */}
          <Route
            path="/leaderboard"
            element={
              <AuthRoute>
                <Leaderboard />
              </AuthRoute>
            }
          />
          <Route
            path="/chat"
            element={
              <AuthRoute>
                <Chat />
              </AuthRoute>
            }
          />
          <Route
            path="/reward"
            element={
              <AuthRoute>
                <Reward />
              </AuthRoute>
            }
          />
          <Route
            path="/reward/levels"
            element={
              <AuthRoute>
                <LevelsView />
              </AuthRoute>
            }
          />
          <Route
            path="/reward/referals"
            element={
              <AuthRoute>
                <Referals />
              </AuthRoute>
            }
          />
          <Route
            path="/reward/earn"
            element={
              <AuthRoute>
                <Earn />
              </AuthRoute>
            }
          />
          <Route
            path="/reward/lottery"
            element={
              <AuthRoute>
                <Lottery />
              </AuthRoute>
            }
          />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
