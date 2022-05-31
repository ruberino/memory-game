import { GameElement } from "./interface";

import Img1 from "./static/bilde2.png";
import Img2 from "./static/bilde3.png";
import Img3 from "./static/bilde15.png";
import Img4 from "./static/bilde13.png";
import Img5 from "./static/bilde14.png";
import Img6 from "./static/bilde4.png";

const images = [Img1, Img2, Img3, Img4, Img5, Img6];

export const imageList: Omit<GameElement, "id">[] = images.map(
  (img, index) => ({
    locked: false,
    imgId: index + 1,
    img,
    shown: false,
  })
);

export const getRandomNumber = () => (Math.random() > 0.5 ? 1 : -1);
