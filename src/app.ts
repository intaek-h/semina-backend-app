import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  res.send("ok");
});

app.get("/articles", (req, res, next) => {
  res.send([
    {
      id: 141,
      content: "hahahahah!",
    },
    {
      id: 145,
      content: "jajajajajja",
    },
  ]);
});

app.listen(3030, () => {
  console.log("listening...");
});
