import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Dashboard } from "./components/dashboard/Dashboard";
import { ChangePassword } from "./components/auth/changePassword";
import { FirstPage } from "./components/FirstPage";

interface appProps {}

const App: React.FC<appProps> = () => {
  return (
    <Router>
      <div className="App">
        <Route path="/">
          <FirstPage />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/reset-password/:token">
          <ChangePassword />
        </Route>
      </div>
    </Router>
  );
};

export default App;
