import React from "react";

const Calculatrice = (props) => {
  let {calculText, setCalculText} = React.useState("")
  // const buttonValues = ["7","8","9","+","4","5","6","-"]
  const buttonValues = [
    ["7", "8", "9", "+"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "*"],
    ["0", ".", "=", "/"],
  ];
  const buttonClicked = (value) => {
    setCalculText( calculText + "value")
  };

  return (
    <div>
      <h1>Bonjour, {props.name}</h1>;

      <p>{calculText}</p>
      {buttonValues.map((elem) => {

        return elem.map((elem2) => {
          return (
            <button onClick={(event) => buttonClicked(elem2)}>
              {elem2}
            </button>
          );
        });
        
      })
      }

    </div>
  );
};
export default Calculatrice;
