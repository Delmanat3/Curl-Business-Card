const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));

app.get("/", (req, res) => {
  if (req.headers["user-agent"].includes("curl")) {
    res.sendFile(path.join(__dirname, "public", "hype.html"));
  } else {
    res.sendFile(path.join(__dirname, "public", "honest.html"));
  }
});

app.listen(PORT, () =>
  console.log(`app listening at http://localhost:${PORT}`)
);
