import { GameElement } from "../../interface";
import Backside from '../../static/backside.png';
import style from './gameboard.module.css';
type Props = {
    gamelist: GameElement[]
    handleElementClick: (el: GameElement) => void;
    loading: boolean;
}

const GameBoard = ({gamelist, handleElementClick, loading}: Props) => {
    if(loading){
      return <p>... Loading game ...</p>
    }
    return <div className={style.gameBoard} >
    {
      gamelist.map(x => (
        <button disabled={x.disabled || x.locked || x.shown} onClick={() => handleElementClick(x)} key={x.id} className={style.gameElement}> 
          <img className={style.gameElementImg} src={ x.shown || x.locked ?  x.img : Backside } alt={`item nr ${x.id}`} />
        </button>
      )
      )  
    }
  </div>
}

export default GameBoard;