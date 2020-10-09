const { response } = require("express");
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (request, response) => response.send("Olá Jeseffe perigoso"));

app.get("/produtos", (request, response) => {
  const produtos = [
    "biscoito",
    "leite",
    "ração para cachorro",
    "massa de tomate",
    "açucar",
    "achocolatado",
    "café",
    "macarrão",
    "macarrão intantâneo",
    "sal",
  ];

  return response.json(produtos);
});

app.listen(3333, () => console.log("To funcionandoo"));
