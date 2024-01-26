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
import { useApp } from "./services/AppContext";
import AuthRoute from "./route/AuthRoute";
import { useEffect, useRef } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { FBCollections, firestore } from "./services/FirebaseService";

function App() {
  const { loadingUser, currentUser, saveUser } = useApp();

  const unsubscribe = useRef(null);

  useEffect(() => {
    if (currentUser && !unsubscribe.current) {
      console.log("===== subscribe =====");
      unsubscribe.current = onSnapshot(
        doc(firestore, FBCollections.USERS, currentUser.id),
        (doc) => {
          console.log("===== updated user: ", doc.data());
          saveUser(doc.data());
        }
      );
    }

    return () => {
      if (unsubscribe.current) {
        console.log("===== unsubscribe =====");
        unsubscribe.current();
        unsubscribe.current = null;
      }
    };
  }, [loadingUser]);

  return (
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
  );
}

export default App;
