/** @format */

const express = require("express");
const { port } = require("../../config.json");
import React from 'react';
import ReactDOM from 'react-dom';
import App from './dashboard/App';
import './index.css'; // Import global styles if needed

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


const app = express();

try {
    app.get("/", (request, response) => {
      return response.sendFile("index.html", { root: "\src/dashboard" });
    });

    app.listen(port, () =>
      console.log(`App listening at http://localhost:${port}`)
    );
} catch (error) {
    console.log(error)
}