"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';

// Types
type Point = {
  x: number;
  y: number;
};

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

// Constants
const GRID_SIZE = 20;
const CELL_SIZE = 20; // in pixels (for visual scaling if needed, but we'll use grid layout)
const INITIAL_SPEED = 150;
const SPEED_INCREMENT = 5;

const INITIAL_SNAKE: Point[] = [
  { x: 10, y: 10 },
  { x: 10, y: 11 },
  { x: 10, y: 12 },
];
const INITIAL_DIRECTION: Direction = 'UP';

const SnakeGame: React.FC = () => {
  // State
  const [snake, setSnake] = useState<Point[]>(INITIAL_SNAKE);
  const [direction, setDirection] = useState<Direction>(INITIAL_DIRECTION);
  const [food, setFood] = useState<Point>({ x: 5, y: 5 });
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  
  // Refs for mutable values accessed in intervals/callbacks
  const directionRef = useRef<Direction>(INITIAL_DIRECTION);
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize High Score from local storage
  useEffect(() => {
    const savedHighScore = localStorage.getItem('snakeHighScore');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore, 10));
    }
  }, []);

  // Update high score when game ends
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('snakeHighScore', score.toString());
    }
  }, [score, highScore]);

  // Generate random food
  const generateFood = useCallback((): Point => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
    // Check if food spawns on snake
    const isOnSnake = snake.some(segment => segment.x === newFood.x && segment.y === newFood.y);
    if (isOnSnake) return generateFood();
    return newFood;
  }, [snake]);

  // Reset Game
  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    directionRef.current = INITIAL_DIRECTION;
    setScore(0);
    setGameOver(false);
    setIsPaused(false);
    setFood(generateFood());
  };

  // Game Loop
  const moveSnake = useCallback(() => {
    if (gameOver || isPaused) return;

    setSnake((prevSnake) => {
      const head = prevSnake[0];
      const newHead = { ...head };

      switch (directionRef.current) {
        case 'UP':
          newHead.y -= 1;
          break;
        case 'DOWN':
          newHead.y += 1;
          break;
        case 'LEFT':
          newHead.x -= 1;
          break;
        case 'RIGHT':
          newHead.x += 1;
          break;
      }

      // Check Collision with walls
      if (
        newHead.x < 0 ||
        newHead.x >= GRID_SIZE ||
        newHead.y < 0 ||
        newHead.y >= GRID_SIZE
      ) {
        setGameOver(true);
        return prevSnake;
      }

      // Check Collision with self
      if (prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
        setGameOver(true);
        return prevSnake;
      }

      const newSnake = [newHead, ...prevSnake];

      // Check if food eaten
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore((s) => s + 1);
        setFood(generateFood());
        // Don't pop the tail, so snake grows
      } else {
        newSnake.pop(); // Remove tail
      }

      return newSnake;
    });
  }, [food, gameOver, isPaused, generateFood]);

  // Keyboard Controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameOver) return;

      switch (e.key) {
        case 'ArrowUp':
          if (directionRef.current !== 'DOWN') directionRef.current = 'UP';
          break;
        case 'ArrowDown':
          if (directionRef.current !== 'UP') directionRef.current = 'DOWN';
          break;
        case 'ArrowLeft':
          if (directionRef.current !== 'RIGHT') directionRef.current = 'LEFT';
          break;
        case 'ArrowRight':
          if (directionRef.current !== 'LEFT') directionRef.current = 'RIGHT';
          break;
        case ' ':
          setIsPaused(prev => !prev);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameOver]);

  // Interval
  useEffect(() => {
    if (gameOver || isPaused) return;
    
    // Speed increases as score increases
    const speed = Math.max(50, INITIAL_SPEED - score * SPEED_INCREMENT);
    
    gameLoopRef.current = setInterval(moveSnake, speed);
    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [moveSnake, gameOver, isPaused, score]);


  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-900 rounded-xl shadow-2xl max-w-md mx-auto border border-gray-700">
      <div className="flex justify-between w-full mb-4 px-2">
        <div className="text-white font-bold">Score: <span className="text-green-400">{score}</span></div>
        <div className="text-white font-bold">High Score: <span className="text-yellow-400">{highScore}</span></div>
      </div>

      <div 
        className="relative bg-black border-2 border-gray-600 rounded-lg overflow-hidden"
        style={{
          width: GRID_SIZE * CELL_SIZE,
          height: GRID_SIZE * CELL_SIZE,
          display: 'grid',
          gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
          gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
        }}
      >
        {/* Render Grid Cells (Optional, for visual guide) */}
        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => (
           <div key={i} className="border-[0.5px] border-gray-800/30 w-full h-full"></div>
        ))}

        {/* Render Snake */}
        {snake.map((segment, index) => {
          const isHead = index === 0;
          return (
            <div
              key={`${segment.x}-${segment.y}`}
              className={`absolute w-full h-full transition-all duration-75 ${isHead ? 'bg-green-400 z-10 rounded-sm' : 'bg-green-600 z-0 rounded-sm'}`}
              style={{
                width: CELL_SIZE,
                height: CELL_SIZE,
                left: segment.x * CELL_SIZE,
                top: segment.y * CELL_SIZE,
              }}
            />
          );
        })}

        {/* Render Food */}
        <div
          className="absolute bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"
          style={{
            width: CELL_SIZE,
            height: CELL_SIZE,
            left: food.x * CELL_SIZE,
            top: food.y * CELL_SIZE,
          }}
        />

        {/* Game Over Overlay */}
        {gameOver && (
          <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-white z-20">
            <h2 className="text-3xl font-bold mb-4 text-red-500">Game Over</h2>
            <p className="mb-6 text-gray-300">Final Score: {score}</p>
            <button
              onClick={resetGame}
              className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-full font-bold transition-colors"
            >
              Play Again
            </button>
          </div>
        )}

        {/* Paused Overlay */}
        {isPaused && !gameOver && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white z-20 backdrop-blur-sm">
            <h2 className="text-2xl font-bold">PAUSED</h2>
          </div>
        )}
      </div>

      <div className="mt-4 text-gray-400 text-sm text-center">
        <p>Use Arrow Keys to Move</p>
        <p>Spacebar to Pause</p>
      </div>
    </div>
  );
};

export default SnakeGame;
