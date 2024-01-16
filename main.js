const express = require("express");
const app = express();

const mainRouter = require("./index");
app.use("/api", mainRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
