import React from "react";
import { Header } from "./views/header/header";
import { Form } from "./components/forms/Form";
import { LedgerView } from "./views/Ledger/LedgerView";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import "./style/main.scss";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Routes>
          <Route element={<LedgerView />} path="/Table" />
          <Route element={<Form />} path="/form" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
