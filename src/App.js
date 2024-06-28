import { useState, useEffect, useRef } from 'react';
import RandomButtons from './RandomButtons';
import CheckTime from './CheckTime';
import gameover from './assets/gameover.mp3';

function App() {
  const [randomizedArr, setRandomizedArr] = useState([]);
  const [clickValue1, setClickValue1] = useState('');
  const [clickValue2, setClickValue2] = useState('');
  const [savedValue, setSavedValue] = useState('');
  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');
  const [message, setMessage] = useState('');
  const [gameTimeMsg, setGameTimeMsg] = useState('');
  const [score, setScore] = useState(0);
  const numOfClicks = useRef(0);

  const [capitalObj, setCapitalObj] = useState({
    "Afghanistan": "Kabul",
    "Argentina": "Buenos Aires",
    "Australia": "Canberra",
    "Austria": "Vienna",
    "Bangladesh": "Dhaka",
    "Belgium": "Brussels",
    "Brazil": "Brasília",
    "Canada": "Ottawa",
    "Chile": "Santiago",
    "China": "Beijing",
    "Colombia": "Bogotá",
    "Czech Republic": "Prague",
    "Denmark": "Copenhagen",
    "Egypt": "Cairo",
    "Finland": "Helsinki",
    "France": "Paris",
    "Germany": "Berlin",
    "Greece": "Athens",
    "Hungary": "Budapest",
    "Iceland": "Reykjavik",
    "India": "New Delhi",
    "Indonesia": "Jakarta",
    "Iran": "Tehran",
    "Iraq": "Baghdad",
    "Ireland": "Dublin",
    "Israel": "Jerusalem",
    "Italy": "Rome",
    "Japan": "Tokyo",
    "Jordan": "Amman",
    "Kenya": "Nairobi",
    "Malaysia": "Kuala Lumpur",
    "Mexico": "Mexico City",
    "Netherlands": "Amsterdam",
    "New Zealand": "Wellington",
    "Nigeria": "Abuja",
    "Norway": "Oslo",
    "Pakistan": "Islamabad",
    "Peru": "Lima",
    "Philippines": "Manila",
    "Poland": "Warsaw",
    "Portugal": "Lisbon",
    "Russia": "Moscow",
    "Saudi Arabia": "Riyadh",
    "South Africa": "Pretoria",
    "South Korea": "Seoul",
    "Spain": "Madrid",
    "Sweden": "Stockholm",
    "Switzerland": "Bern",
    "Turkey": "Ankara",
    "United Kingdom": "London",
    "United States": "Washington, D.C."
  });

  useEffect(() => {
    const countryArr = Object.keys(capitalObj);
    const capitalArr = Object.values(capitalObj);
    const countCapitArr = countryArr.concat(capitalArr);

    const countCapitArrLength = countCapitArr.length;
    const newRandomizedArr = [];

    for (let _ = 0; _ < countCapitArrLength; _++) {
      let changinglength = countCapitArr.length;
      let elementIndex = Math.floor(Math.random() * changinglength);
      newRandomizedArr.push(countCapitArr[elementIndex]);
      countCapitArr.splice(elementIndex, 1);
    }
    setRandomizedArr(newRandomizedArr);

  }, [capitalObj]);

  const gameoverPlay = () => {
    new Audio(gameover).play();
  }

  return (
    <div className="App">
      <CheckTime
        gameTimeMsg={gameTimeMsg}
        setGameTimeMsg={setGameTimeMsg}
      />
      {gameTimeMsg !== "Game Over!!!" ? (
        <>
          <RandomButtons
            randomizedArr={randomizedArr}
            setRandomizedArr={setRandomizedArr}
            clickValue1={clickValue1}
            setClickValue1={setClickValue1}
            clickValue2={clickValue2}
            setClickValue2={setClickValue2}
            savedValue={savedValue}
            setSavedValue={setSavedValue}
            color1={color1}
            setColor1={setColor1}
            color2={color2}
            setColor2={setColor2}
            message={message}
            setMessage={setMessage}
            numOfClicks={numOfClicks}
            capitalObj={capitalObj}
            score={score}
            setScore={setScore}
          />
          <header className="score-board">
            {score}
          </header>
        </>
      ) : (
        <p style={{ fontSize: "1.5rem" }}>Your Score: {score} {gameoverPlay()}</p>
      )
      }

    </div>
  );
}

export default App;
