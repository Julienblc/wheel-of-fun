'use client'
import { CSSProperties, useState } from 'react';

import { useSpring } from '@react-spring/web';

import { IGame, games } from "@/constants/games"

import * as S from "./styled"
import { Button } from '../Button/Button';

const generateRandomHexColor = (): string => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
}

const selectRandomGames = (games: IGame[], count = 8) => {
  const shuffledGames = [...games].sort(() => 0.5 - Math.random());
  return shuffledGames.slice(0, count);
};

const Wheel = () => {
  const [rotation, setRotation] = useState(0);
  const [selectedGame, setSelectedGame] = useState("");

  const randomGames = selectRandomGames(games)

  const props = useSpring({
    to: async (next) => {
      await next({ transform: `rotate(${rotation}deg)` });
    },
    from: { transform: `rotate(0deg)` },
    reset: true,
  });

  const spinWheel = () => {
    const newRotation = rotation + 1000 + Math.random();
    setRotation(newRotation);

    const totalGames = randomGames.length;
    const degreesPerGame = 360 / totalGames;
    const offset = 360 - (newRotation % 360);
    const selectedGameIndex = Math.floor((offset / degreesPerGame) % totalGames);
    setSelectedGame(randomGames[selectedGameIndex].name);
  };

  return (
    <S.Container>
      <S.StyledArrow />
      <S.Wheel style={props}>
        {randomGames.map((jeu, index) => {
          const angle = (360 / randomGames.length) * index;
          const style: CSSProperties = {
            backgroundColor: generateRandomHexColor(),
            left: index === 0 ? '50%' : undefined,
            transform: index > 0 ? `rotate(${angle}deg)` : undefined
          }
          return (
            <div style={style}>{jeu.name}</div>
          )
        })}
      </S.Wheel>
      <Button title='TOURNER LA ROUE' onClick={spinWheel} />
    </S.Container>
  );
}

export { Wheel }