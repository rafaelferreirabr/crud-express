import express from "express";

const app = express();

app.get("/", function(req, res) {
  const hello = JSON.stringify("Hello World!");
  res.send(hello);
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
