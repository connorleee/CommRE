const express = require("express");
const cors = require("cors");
const fs = require("fs");
const csv = require("csv-parser"); //npm package to parse csv files

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()); //allows all CORS requests since server is different port than client

app.get("/agents", (req, res) => {
  let results = [];

  fs.createReadStream(__dirname + "/Sale-Data.csv")
    .pipe(csv(["agent", "propertyType", "date"]))
    .on("data", (data) => {
      results.push(data);
    })
    .on("end", () => {
      res.json(results.slice(1));
    });
});

app.get("/property-types", (req, res) => {
  let results = [];

  fs.createReadStream(__dirname + "/Sale-Data.csv")
    .pipe(csv(["agent", "propertyType", "date"]))
    .on("data", (data) => {
      results.push(data);
    })
    .on("end", () => {
      res.json(results.slice(1));
    });
});

app.get("/property-sales", (req, res) => {
  let results = [];

  fs.createReadStream(__dirname + "/Sale-Data.csv")
    .pipe(csv(["agent", "propertyType", "date"]))
    .on("data", (data) => {
      results.push(data);
    })
    .on("end", () => {
      res.json(results.slice(1));
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
