const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const uuid = require("uuid");

app.get("/", (req, res) => {
  res.send(uuid.v4());
});

app.listen(PORT, () => console.log(`Server started on port -> ${PORT}`));
