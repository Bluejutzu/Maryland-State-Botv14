/** @format */

const express = require("express");
const { port } = require("../config.json");

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