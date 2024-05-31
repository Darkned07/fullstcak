const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM student";
  db.query(sql, (err, data) => {
    if (err)
      return res.json({
        message: "error",
      });
    return res.json(data);
  });
});

app.post("/create", (req, res) => {
  const sql = "INSERT INTO student (`name`,`email`) VALUES (?)";
  const values = [req.body.name, req.body.email];
  db.query(sql, [values], (err, data) => {
    if (err)
      return res.json({
        message: "failed",
      });
    return res.json(data);
  });
});

app.patch("/update/:id", (req, res) => {
  const sql = "UPDATE student set name = ? email = ? where id = ?";
  const values = [req.body.name, req.body.email];
  const id = req.params.id;

  db.query(sql, [...values, id], (err, data) => {
    if (err)
      return res.json({
        put: "failed",
        message: "failed",
      });
    return res.json(data);
  });
});

app.delete("/delete/:id", (req, res) => {
  const sql = "DELETE FROM student WHERE ID = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err)
      return res.json({
        message: "failde",
      });
    return res.json(data);
  });
});

app.listen(8000, () => {
  console.log("Listening 8000");
});
