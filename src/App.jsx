import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";

const Admin = lazy(() => import("./pages/Admin"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const TransactionPage = lazy(() => import("./pages/Transaction"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="flex items-center justify-center w-full h-screen">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/transaction" element={<TransactionPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
