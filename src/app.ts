import express from "express";
import { Board } from "./@core/types/type";

const app = express();

app.get("/", (req, res, next) => {
  res.send("ok");
});

app.get("/articles", (req, res, next) => {
  const boards: Board[] = [
    { id: 141, content: "hahahahah!" },
    { id: 145, content: "jajajajajja" },
  ];

  res.send(boards);
});

app.listen(3030, () => {
  console.log("listening...");
});
