import { GameElement } from "./interface";




export const imageList = (images: string[]):Omit<GameElement, "id">[] => images.map(
  (img, index) => ({
    locked: false,
    imgId: index + 1,
    img,
    shown: false,
  })
);

export const getRandomNumber = () => (Math.random() > 0.5 ? 1 : -1);

export const initArray = (images: string[]) => [...imageList(images), ...imageList(images)].map((element, i) => ({...element, id: i + 1}) ).slice().sort(getRandomNumber);
