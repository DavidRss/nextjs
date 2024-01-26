import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Leaderboard from "./pages/Leaderboard";
import Chat from "./pages/Chat";
import Reward from "./pages/Reward";
import Levels from "./pages/RewardsPages/Levels";
import Referals from "./pages/RewardsPages/Referals";
import Earn from "./pages/RewardsPages/Earn";
import Lottery from "./pages/RewardsPages/Lottery";

/* New */
import About from "./pages/About";
import AuthRoute from "./route/auth.route";
import Faq from "./pages/Faq";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          index
          element={
            <AuthRoute>
              <About />
            </AuthRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <AuthRoute>
              <Login />
            </AuthRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthRoute>
              <SignUp />
            </AuthRoute>
          }
        />
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
          path="/faq"
          element={
            <AuthRoute>
              <Faq />
            </AuthRoute>
          }
        />
        <Route
          path="/reward/levels"
          element={
            <AuthRoute>
              <Levels />
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
  );
}

export default App;
