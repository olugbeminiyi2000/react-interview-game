import success from './assets/success.mp3';
import error from './assets/error.mp3';

const RandomButtons = ({ randomizedArr, clickValue1, setClickValue1, clickValue2, setClickValue2, savedValue, setSavedValue, color1, setColor1, color2, setColor2, message, setMessage, numOfClicks, capitalObj, setRandomizedArr, setScore, score }) => {

  const successPlay = () => {
    new Audio(success).play();
  }
  const errorPlay = () => {
    new Audio(error).play();
  }


  const handleButtonSelection = (event) => {
    const clickedButtonText = event.currentTarget.id;
    if (clickedButtonText === savedValue) {
      return;
    }
    numOfClicks.current += 1;
    if (numOfClicks.current === 1) {
      setClickValue1(clickedButtonText);
      setClickValue2('');
      setSavedValue(clickedButtonText);
      setColor1('blue');
      setColor2('')
    } else {
      if (capitalObj[clickedButtonText] === savedValue || capitalObj[savedValue] === clickedButtonText) {
        const updateArr = randomizedArr.filter((element) => element !== clickedButtonText && element !== savedValue);
        numOfClicks.current = 0;
        setRandomizedArr(updateArr);
        setClickValue1('');
        setClickValue2('');
        setSavedValue('');
        setColor1('');
        setColor2('');
        setScore(score + 1);
        successPlay();
        if (updateArr.length === 0) setMessage("Congratulations!!!");
      } else {
        numOfClicks.current = 0;
        setClickValue1(savedValue);
        setClickValue2(clickedButtonText);
        setColor1("red");
        setColor2("red");
        setSavedValue('');
        errorPlay();
      }
    }

  }
  return (
    <main className='buttons'>
      {randomizedArr.map((element) => (
        <div
          onClick={handleButtonSelection}
          style={clickValue1 === element ? { backgroundColor: color1 } : clickValue2 === element ? { backgroundColor: color2 } : null}
          key={element}
          id={element}
          className='button'
        >
          {element}
        </div>
      ))}
      {message ? <p style={{ color: "green" }}>{message}</p> : null}
    </main>
  )
}
export default RandomButtons