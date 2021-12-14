const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", cors(), async (req, res) => {
  res.send("This is working!");
});

app.post("/post_email", async (req, res) => {
  let { email } = req.body;
  console.log(email);
  res.send("Email sent!");
});

app.listen(port, () => console.log(`Server started on port ${port}`));

// const path = require("path");

// const express = require("express");
// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use("public", express.static(path.join(__dirname, "public")));

// app.get('/', req, res => {
//     res.render

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });

//   "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"
