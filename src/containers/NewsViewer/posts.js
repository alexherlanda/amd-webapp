import React from "react";
import Post1 from "./post1";
import Post2 from "./post2";
import Post3 from "./post3";

export const posts = [
  {
    id: 1,
    title: "David Camaño se corona campeón mundial de discursos",
    description:
      "En una final en la por primera vez participaron dos personas mexicanas, David Camaño se convirtió en el ganador de la competencia de discursos del Campeonato Mundial Universitario de Debate",
    author: "César Rivas",
    date: "31-Jun-2021",
    url: "/post/2",
    cover: "https://live.staticflickr.com/65535/50893529607_b1734e9ce8.jpg",
    mainImage: "https://live.staticflickr.com/65535/50893529607_b1734e9ce8.jpg",
    content: <Post3 />,
  },
  {
    id: 2,
    title:
      "Estudiantes de la Escuela Libre de Derecho ganan el VI Campeonato Nacional de Debate",
    description:
      "Alicia Robles y Eduardo Rodríguez se coronan campeones nacionales, en la primera vez que estudiantes de la Escuela Libre de Derecho pueden participar en el torneo. ",
    author: "Team AMD",
    date: "31-Jun-2021",
    content: <Post1 />,
  },
  {
    id: 3,
    title:
      "Entrevista a Andrea Rincón, mejor oradora del Campeonato Nacional de Debate 2020",
    description:
      "Tras haber firmado una de las participaciones más contundentes en la historia del CND, Andrea nos comparte algunas reflexiones y varias declaraciones de amor para el circuito",
    author: "Team AMD",
    date: "06-Ene-2021",
    content: <Post2 />,
  },
];

export default posts;
