import Img1 from './static/bilde2.png';
import Img2 from './static/bilde3.png';
import Img3 from './static/bilde15.png';
import Img4 from './static/bilde13.png';
import Img5 from './static/bilde14.png';
import Img6 from './static/bilde4.png';
import Backside from './static/backside.png';

export default [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Backside
];


export const gameArray = [{
    locked: false,
    imgId: 1,
    img: Img1,
    shown: false,
    
},{
    locked: false,
    imgId: 2,
    img: Img2,
    shown: false
},{
    locked: false,
    imgId: 3,
    img: Img3,
    shown: false
},{
    img: Img4,
    imgId: 4,
    locked: false,
    shown: false
},{
    img: Img5,
    imgId: 5,
    locked: false,
    shown: false
},{
    img: Img6,
    imgId: 6,
    locked: false,
    shown: false
}]

export const getRandomNumber = () => (Math.random() > .5) ? 1 : -1