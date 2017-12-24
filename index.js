const express = require("express");
const app = express();
const PORT = process.env.PORT || 3010;
app.get("/", (req, res) => {
  res.send("Lovely");
});

app.listen(PORT, () => {
  console.log(`Broadcasting on port ${PORT}`);
});
