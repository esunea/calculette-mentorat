import React from "react";
import Card from '@mui/material/Card';

const Calculatrice = (props) => {
  const [calculText, setCalculText] = React.useState("");
  // const buttonValues = ["7","8","9","+","4","5","6","-"]
  const buttonValues = [
    ["7", "8", "9", "+"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "*"],
    ["C", "0", "=", "/"],
  ];
  const buttonClicked = (value) => {
    if (value === "=") {
      setCalculText(eval(calculText));
    } else if (value === "C") {
      setCalculText("");
    } else {
      setCalculText(calculText + value);
    }
  };

  return (
    <div>
      <h1>Bonjour, {props.name}</h1>
      <Card sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
        <p>{calculText}</p>
        <CardContent>
        {buttonValues.map((elem) => {
          return (
            <div>
              {" "}
              {elem.map((elem2) => {
                return (
                  <button
                    key="{elem2}"
                    onClick={(event) => buttonClicked(elem2)}
                  >
                    {elem2}
                  </button>
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
