import { useEffect } from 'react';
const Timer = require('tm-timer');

const CheckTime = ({ gameTimeMsg, setGameTimeMsg }) => {

  useEffect(() => {
    const t = new Timer();
    const time = 10 * 60 * 1000; // 5 minutes in milliseconds
    t.set(time);

    t.whenDone(() => {
      setGameTimeMsg("Game Over!!!");
    });

    t.onTick((isBigTick, timeLeft) => {
      const hourMilliSeconds = 3600000;
      const hourSeconds = 3600;
      const minuteSeconds = 60;

      if (isBigTick) {
        let getMinutesInMilliSeconds = timeLeft;
        let getHourInSeconds = Math.floor((getMinutesInMilliSeconds * hourSeconds) / hourMilliSeconds);
        let getHourInValue = Math.floor(getHourInSeconds / hourSeconds);
        let getRemainingSeconds;
        if (hourSeconds > getHourInSeconds) getRemainingSeconds = getHourInSeconds;
        else getRemainingSeconds = getHourInSeconds - (hourSeconds * getHourInValue);

        let getMinuteInValue = Math.floor(getRemainingSeconds / minuteSeconds);
        let getSecondInValue = getRemainingSeconds - (getMinuteInValue * 60);

        setGameTimeMsg(`${getHourInValue}:${getMinuteInValue}:${getSecondInValue}`);
      }
    });

    t.start();

    return () => {
      t.stop();
    };
  }, [setGameTimeMsg]); 

  return (
    <header className='game-timer'>
      {gameTimeMsg}
    </header>
  );
};

export default CheckTime;
