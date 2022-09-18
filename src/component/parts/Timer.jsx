import React from "react";

const Timer = () => {
  const [number, setNumber] = React.useState(2);
  const incrNum = () => {
    setNumber(number * 2);
  };
  if (number <= 400) {
    setInterval(incrNum, 1000);
  } else {
    setNumber(400);
  }
  console.log(number);

  return (
    <div>
      <h1>
        Fist data
        <p id="counter" data-target="4000">
          {number}
        </p>
      </h1>
      <h1>
        second data
        <p id="counter" data-target="15000"></p>
      </h1>
      <h1>
        third data
        <p id="counter" data-target="8000"></p>
      </h1>
    </div>
  );
};

export default Timer;
