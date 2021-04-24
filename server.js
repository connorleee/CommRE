const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()); //allows all CORS requests since server is different port than client

app.get("/agents", (req, res) => {
  res.send("Agents");
});

app.get("/property-types", (req, res) => {
  res.send("property-types");
});

app.get("/property-sales", (req, res) => {
  res.send("property-sales");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
