import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        ></Typography>
        <Typography variant="h5" component="div">
          Bienvenue sur mon portfolio 🖐️
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <br />
        </Typography>
        <Typography variant="body2">
          <p>
            👨‍🎓 • Actuellement en année préparatoire à l'<strong>ETNA</strong> et
            à la recherche d'une <strong>alternance</strong> pour{" "}
            <strong>Mars 2023</strong> et dans le but d'obtenir un Master of
            Science 1&2 Architecte logiciel, développeur d'application web et
            mobile.
          </p>
          <p>
            📖 • Passionné par le web et les nouvelles technologies depuis
            petit, je suis actuellement à la recherche d'une{" "}
            <strong>alternance</strong> afin de parfaire ma formation de{" "}
            <strong>développeur d'application web et mobile</strong>. Je suis en
            outre dynamique, curieux, sociable et doté d'une grande capacité
            d'adaptation et de communication.
          </p>
          <p>
            👨‍💻 • Je maîtrise <strong>HTML</strong>, <strong>CSS</strong>,{" "}
            <strong>PHP</strong>, <strong>TYPESCRIPT</strong> &{" "}
            <strong>JAVASCRIPT</strong>, <strong>REACT</strong>,{" "}
            <strong>NEXT</strong>, <strong>NODEJS</strong>, <strong>GIT</strong>
            , <strong>SQL</strong> & <strong>MARIADB</strong>.
          </p>
          <p>
            D'ailleurs, je possède aussi de très nombreuses connaissances en{" "}
            <strong>PHOTOSHOP</strong>, <strong>AFTER EFFECT</strong> et sur
            <strong> SONY VEGAS PRO</strong>.
          </p>
          <p>
            👇🏼 • Vous avez la possibilité d'accéder à mon CV en cliquant sur le
            bouton juste en-dessous.
          </p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          href="cvmalkirayane.pdf"
          download="CV-MALKI-Rayane.pdf"
          size="small"
        >
          MON CV 📃
        </Button>
      </CardActions>
    </Card>
  );
}
