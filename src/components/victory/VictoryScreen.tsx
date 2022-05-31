
import VictoryImage from "../../static/harold.png";
import style from './victory.module.css';

type Props = {
    restart: VoidFunction;
    time: string;
}


const VictoryScreen = ({restart, time}: Props) => {

    return (
        <section className={style.mainSection}>
            <h2>Gratulerer!</h2>
            <p className={style.timeText}>Du klarte spillet på {time} sekunder!</p>
            <img className={style.victoryImage} src={VictoryImage} alt="showing a trophy" />
        </section>
    );
}

export default VictoryScreen;