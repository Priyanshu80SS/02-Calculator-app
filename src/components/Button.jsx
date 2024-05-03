const Button = ({ clickButton }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className="numberBox">
      {buttonNames.map((buttonName, index) => (
        <div key={index} className="numberBoxSection">
          <div className="number">
            <button onClick={clickButton}>{buttonName}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Button;
