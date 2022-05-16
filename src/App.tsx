
import { Children, useState } from 'react';
import './App.css';
import { GameElement } from './interface';
import { gameArray, getRandomNumber } from './utils'
import Backside from './static/backside.png';



function App() {

  const [chosenElement, setChosenElement ] = useState<GameElement>()
  const initArray = [...gameArray, ...gameArray].map((element, i) => ({...element, id: i + 1}) ).slice().sort(getRandomNumber)
  const [gamelist, setGamelist] = useState<GameElement[]>(initArray)
  let timer: ReturnType<typeof setTimeout>;

  const wrongElementsChosen = (el: GameElement) => {
    setGamelist(prestate => prestate.map(x => {
      return {
        ...x,
        shown: x.id === el.id || x.id === chosenElement?.id  ? true : false,
        disabled: true
      }
    }))
    timer = setTimeout(() => {
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

  const handleElementClick = (el: GameElement) => {
    if(!chosenElement){
      setChosenElement(el);
      setGamelist(prestate => prestate.map(x => {
        return {
          ...x,
          shown: el.id === x.id ? true : false,
        }
      }))
    }else if(chosenElement && el.imgId === chosenElement.imgId && el.id !== chosenElement.id) {
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
    clearTimeout(timer);
    setChosenElement(undefined);
    setGamelist(initArray);
  }
  return (
    <div className="App">
      <header className="">
        <h1>
          MEMORY GAME
        </h1>
      </header>
      <main>
        <button onClick={restart}>RESTART</button>
        <div className="game-board" >
          {
            gamelist.map(x => (
              <button disabled={x.disabled} onClick={() => handleElementClick(x)} key={x.id} className="game-element"> 
                <img className="game-element-img" src={ x.shown || x.locked ?  x.img : Backside } />
              </button>
            )
            )
          }
        </div>
      </main>
    </div>
  );
}

export default App;
