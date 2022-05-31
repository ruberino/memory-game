
import { useEffect, useState } from 'react';
import './App.css';
import { GameElement } from './interface';
import { initArray } from './utils'
import VictoryScreen from './components/victory/VictoryScreen';
import GameBoard from './components/gameboard/GameBoard';
import useSetInterval from './hooks/useSetInterval';
import useSetTimeout from './hooks/useSetTimeout';



function App() {

  const [chosenElement, setChosenElement ] = useState<GameElement>();
  const [gamelist, setGamelist] = useState<GameElement[]>(initArray);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [showWinningScreen, setShowWinningScreen] = useState(false);
  const [time, setTime] = useSetInterval(timerRunning);
  const [timeout, clear] = useSetTimeout();

  const wrongElementsChosen = (el: GameElement) => {
    setGamelist(prestate => prestate.map(x => {
      return {
        ...x,
        shown: x.id === el.id || x.id === chosenElement?.id  ? true : false,
        disabled: true
      }
    }))
    timeout(() => {
      setChosenElement(undefined)
      setGamelist(prestate => prestate.map(x => {
        return {
          ...x,
          shown: false,
          disabled: false
        }
      }))
    }, 1000)
  }

  const setElementAsChosenElement = (el: GameElement) => {
    setChosenElement(el);
    setGamelist(prestate => prestate.map(x => {
      return {
        ...x,
        shown: el.id === x.id ? true : false,
      }
    }))
  }

  const handleElementClick = (el: GameElement) => {
    if(!timerRunning){
      setTimerRunning(true)
    }
    if(!chosenElement){
      setElementAsChosenElement(el)
    }else if(el.imgId === chosenElement.imgId && el.id !== chosenElement.id) {
      setGamelist(prestate => prestate.map(x => {
        return {
          ...x,
          shown: false,
          locked: el.id === x.id || chosenElement.id === x.id || x.locked ? true : false 
        }
      }))
      setChosenElement(undefined)
    }else {
      wrongElementsChosen(el);
    }
  }

  const restart = () => {
    clear();
    setShowWinningScreen(false);
    setChosenElement(undefined);
    setGamelist(initArray);
    setTimerRunning(false);
    setShowWinningScreen(false);
    setTime(0);
  }

  useEffect(() => {
    const someNotShown = gamelist.some(x => !x.locked);
    if(!someNotShown){
      setTimerRunning(false);
      setShowWinningScreen(true);
    }
  }, [gamelist])
  
  return (
    <div className="App">
      <header>
        <h1>
          MEMORY GAME
        </h1>
      </header>
      <main>
        <button onClick={restart}>RESTART</button>
        { showWinningScreen ? <VictoryScreen restart={restart} time={Math.floor(time / 100000).toString()} /> :
        <GameBoard gamelist={gamelist} handleElementClick={handleElementClick} />}
      </main>
      <footer>
        &copy; Aboveit AS
      </footer>
    </div>
  );
}

export default App;
