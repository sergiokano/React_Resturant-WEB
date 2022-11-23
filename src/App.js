import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ReserveForm from "./components/Reserve/Reserve";
// import { useState } from "react";

function App() {
  const dishes = [
    {
      id: 1,
      name: "plato 1",
      description: "Este es el plato 1",
      price: 10,
    },
    {
      id: 2,
      name: "plato 2",
      description: "Este es el plato 2",
      price: 20,
    },
    {
      id: 3,
      name: "plato 3",
      description: "Este es el plato 3",
      price: 15,
    },
  ];

  return (
    <div className="App">
      <header>
        <p>
          <BrowserRouter>
            <Header className="header-container" />
            <Routes>
              <Route path="/" element={<Home menu={dishes} />} />
              <Route path="/ReserveForm" element={<ReserveForm />} />
            </Routes>
          </BrowserRouter>
        </p>
      </header>
    </div>
  );
}

export default App;
