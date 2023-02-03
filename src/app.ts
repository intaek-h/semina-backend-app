import express from "express";
import { Board } from "./@core/types/type";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res, next) => {
  res.send("ok");
});

app.get("/articles", (req, res, next) => {
  const boards: Board[] = [
    { id: 141, content: "hahahahah!", created_at: new Date().toString() },
    { id: 145, content: "jajajajajja", created_at: new Date().toString() },
  ];

  res.send(boards);
});

app.listen(3030, () => {
  console.log("listening...");
});
