import React, { useState } from "react";
import "./App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
function App() {
  const [display, setDisplay] = useState("");
  const [theme, setTheme] = useState("");
  const [icon, setIcon] = useState(false);
  const [shadow, setShadow] = useState("");

  function handleClick(event) {
    const value = event.target.value;
    switch (value) {
      case "C":
        setDisplay("");
        break;
      case "=":
        try {
          const result = eval(display);
          setDisplay(result.toString());
        } catch (error) {
          setDisplay("Error");
        }
        break;
      default:
        setDisplay(display + value);
        break;
    }
  }

  const handleTheme = () => {
    if (theme === "") {
      setTheme("click");
      setIcon(true);
      setShadow("shadow");
    } else if (theme === "click") {
      setTheme("");
      setIcon(false);
      setShadow("");
    }
  };

  return (
    <div className="wrapper">
      <div className="calculator" id={theme}>
        <div className="display">
          <input
            className="displayResult"
            id={theme}
            type="text"
            value={display}
            readOnly
          />
          <b className="theme">
            {icon ? (
              <BsFillMoonStarsFill onClick={handleTheme} />
            ) : (
              <BsFillSunFill onClick={handleTheme} />
            )}
          </b>
        </div>
        <div className="buttons">
          <button onClick={handleClick} id={shadow} value="7">
            7
          </button>
          <button onClick={handleClick} id={shadow} value="8">
            8
          </button>
          <button onClick={handleClick} id={shadow} value="9">
            9
          </button>
          <button onClick={handleClick} id={shadow} value="C">
            C
          </button>

          <button onClick={handleClick} id={shadow} value="4">
            4
          </button>
          <button onClick={handleClick} id={shadow} value="5">
            5
          </button>
          <button onClick={handleClick} id={shadow} value="6">
            6
          </button>
          <button onClick={handleClick} id={shadow} value="+">
            +
          </button>

          <button onClick={handleClick} id={shadow} value="1">
            1
          </button>
          <button onClick={handleClick} id={shadow} value="2">
            2
          </button>
          <button onClick={handleClick} id={shadow} value="3">
            3
          </button>
          <button onClick={handleClick} id={shadow} value="-">
            -
          </button>

          <button onClick={handleClick} id={shadow} value="0">
            0
          </button>
          <button onClick={handleClick} id={shadow} value="*">
            *
          </button>
          <button onClick={handleClick} id={shadow} value="/">
            /
          </button>
          <button onClick={handleClick} id={shadow} value="=">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
