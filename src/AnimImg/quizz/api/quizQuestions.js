import image1 from "../../bexai/img/CIMG3 (2).jpg";
import image2 from "../../bexai/img/CIMG3 (4).jpg";
import image3 from "../../bexai/img/CIMG3 (6).jpg";
import image4 from "../../bexai/img/CIMG3 (11).jpg";
import image5 from "../../bexai/img/CIMG3 (9).jpg";

var quizQuestions = [
  {
      img :image1,
      question: "L'atmosphère est composée majoritairement :?",
      answers: [
          {
              point:0,
              type: "Player",
              content: "Kohlendioxid (CO2)"
          },
          {
              point:2,
              type: "Connaisseurr",
              content: "Diazote (N2)"
          },
          {
              point:2,
              type: "Spationaute",
              content: "Oxygen (O2)"
        },
          {
              point:0,
              type: "Astronaute",
              content: "Argon (Ar)"
          }
      ]
  },
  {
      img :image2,
      question: "L'unité utilisée pour exprimer la vitesse du vent (dossiers de vol) est :?",
      answers: [
          {
            point:0,
            type: "Astronaute",
              content: "Kilomètre par heure"
          },
          {
            point:2,
            type: "Connaisseur",
              content: "Der Knoten"
          },
          {
            point:0,
            type: "Spationaute",
              content: "One metre per second"
          },
          {
            point:0,
            type: "Player",
            content: "Le pied par minute"
        }
      ]
  },
  {
      img :image3,
      question: "La direction du vent en altitude et sa vitesse sont mesurés avec:?",
      answers: [
          {
            point:2,
            type: "Connaisseur",
            content: "Le ballon sonde"
          },
          {
            point:0,
            type: "Player",
            content: "Die Wetterfahne"
          },
          {
            point:0,
            type: "Spationaute",
              content: "The air sleeve"
          },
          {
            point:0,
            type: "Astronaute",
              content: "L'anémomètre."
          }
      ]
  },
  {
      img :image4,
      question: "Les cirrus, les cirrostratus, les altostratus et les stratus?",
      answers: [
          {
            point:0,
            type: "Astronaute",
              content: "Cumuliform clouds"
          },
          {
            point:0,
            type: "Player",
              content: "Exclusivement de la glace"
          },
          {
            point:0,
            type: "Spationaute",
              content: "Im Obergeschoss der Atmosphäre."
          },
          {
            point:2,
            type: "Connaisseur",
              content: "Des nuages stables."
          }
      ]
  },
  {
      img :image5,
      question: "L'extension verticale des cumulonimbus a pour ordre de grandeur :?",
      answers: [
        {
            point:0,
            type: "Astronaute",
              content: "1000 mètres"
          },
          {
            point:0,
            type: "Player",
              content: "100 Meter"
          },
          {
            point:2,
            type: "Spationaute",
              content: "10 000 mètres"
          },
          {
            point:0,
            type: "Connaisseurr",
              content: "100 Kilometres."
          }
      ]
  }
];

export default quizQuestions;
