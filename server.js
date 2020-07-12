import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.get("/", function(req, res) {
  const hello = JSON.stringify("Hello World!");
  res.send(hello);
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
