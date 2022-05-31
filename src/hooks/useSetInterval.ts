import { useEffect, useRef, useState } from "react";

const useSetInterval = (timerRunning: boolean): [number, React.Dispatch<React.SetStateAction<number>>] => {
    const [time, setTime] = useState<number>(0);
    const stopWatchTimer = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if (timerRunning) {
          stopWatchTimer.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1000);
          }, 10);
        } else if (!timerRunning && stopWatchTimer.current) {
          clearInterval(stopWatchTimer.current);
        }
        return () => {
          if(stopWatchTimer.current)
          return clearInterval(stopWatchTimer.current)
        }
      }, [timerRunning]);

    return [time, setTime]
}
export default useSetInterval;