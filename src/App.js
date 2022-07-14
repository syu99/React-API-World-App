import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

//1// Nous enveloppons d'abord notre contenu avec <BrowserRouter>  (c'est ce qu'on appel un wrap".)
//2// Ensuite, nous définissons nos <Routes>. Une application peut avoir plusieurs <Routes>
//3// path="*"  oriente l'utilisateur vers l'accueil lorsque celui ci indique une mauvaise url
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
