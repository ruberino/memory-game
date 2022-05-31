import { GameElement } from "../../interface";
import Backside from '../../static/backside.png';

type Props = {
    gamelist: GameElement[]
    handleElementClick: (el: GameElement) => void;
}

const GameBoard = ({gamelist, handleElementClick}: Props) => {
    return <div className="game-board" >
    {
      gamelist.map(x => (
        <button disabled={x.disabled || x.locked || x.shown} onClick={() => handleElementClick(x)} key={x.id} className="game-element"> 
          <img className="game-element-img" src={ x.shown || x.locked ?  x.img : Backside } alt={`item nr ${x.id}`} />
        </button>
      )
      )  
    }
  </div>
}

export default GameBoard;