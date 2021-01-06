import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<Footer />, document.getElementById("footer"));
ReactDOM.render(<Note />, document.getElementById("note"));
