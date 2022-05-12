import React from "react";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import Button from "@mui/material/Button";

const Calculatrice = (props) => {
  const [calculText, setCalculText] = React.useState("");
  const [konamiWin, setKonamiWin] = React.useState("");
  const code = "↑↑↓↓<><>BA";
  let konamiSequence = "";
  const buttonValues = [
    ["7", "8", "9", "+", "↑", "A"],
    ["4", "5", "6", "-", "↓", "B"],
    ["1", "2", "3", "*", "<", "C"],
    ["C", "0", "=", "/", ">", "D"],
  ];
  const buttonClicked = (value) => {
    switch (value) {
      case "=":
        konamiReset();
        setCalculText(eval(calculText));
        break;
      case "C":
        konamiReset();
        setKonamiWin("");
        setCalculText("");

        break;
      case "↑":
      case "↓":
      case "<":
      case ">":
      case "A":
      case "B":
      case "C":
      case "D":
        konami(value);
        break;

      default:
        konamiReset();
        setCalculText(calculText + value);
        break;
    }
  };

  const konami = (value) => {
    konamiSequence = konamiSequence + value;
    console.log(konamiSequence);
    if (code.indexOf(konamiSequence) === -1) {
      konamiReset();
    }
    console.log(code, konamiSequence);
    if (code === konamiSequence) {
      console.log("konamiWin");
      setKonamiWin("Congrats, you won");
    }
  };

  const konamiReset = () => {
    konamiSequence = "";
  };

  return (
    <div>
      <h1 key="plouf">Bonjour, {props.name}</h1>
      <h1 key="whatever">{konamiWin}</h1>
      <Card
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
      >
        <p>{calculText}</p>
        <CardContent>
          {buttonValues.map((elem) => {
            return (
              <div>
                {" "}
                {elem.map((elem2) => {
                  return (
                    <Button
                      key="{elem2}"
                      onClick={(evnt) => buttonClicked(elem2)}
                    >
                      {elem2}
                    </Button>
                  );
                })}{" "}
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};
export default Calculatrice;
