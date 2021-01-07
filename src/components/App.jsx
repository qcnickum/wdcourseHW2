import React from "react";
import notes from "../notes";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <d1>{notes.map(Note)}</d1>
    </div>
  );
}

export default App;