import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AdmainDashboard from "./components/AdminDashboard.js";
import Routers from './Routers.js';

ReactDOM.render(<Routers />, document.getElementById("root"));