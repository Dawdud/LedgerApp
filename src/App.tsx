import React from "react";
import { Header } from "./views/header/header";
import { FormView } from "./views/LedgerForm/FormView";
import { LedgerView } from "./views/Ledger/LedgerView";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import "./style/main.scss";
function App() {
  return (
    <div className="App">
      <main className="container">
        <Header></Header>
        <Routes>
          <Route element={<LedgerView />} path="/Table" />
          <Route element={<FormView />} path="/form" />
        </Routes>
      </main>
    </div>
  );
}

export default App;
