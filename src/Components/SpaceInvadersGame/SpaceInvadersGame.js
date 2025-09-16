import React, { useState, useEffect, useRef } from "react";
import "./SpaceInvadersGame.scss";

const WIDTH = 15;
const HEIGHT = 15;
const TOTAL = WIDTH * HEIGHT;

export default function SpaceInvadersGame() {
  const [shooter, setShooter] = useState(TOTAL - Math.ceil(WIDTH / 2));
  const [invaders, setInvaders] = useState([]);
  const [lasers, setLasers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const direction = useRef(1);

  // ---- Inicializar juego ----
  const startGame = () => {
    setShooter(TOTAL - Math.ceil(WIDTH / 2));
    setInvaders(Array.from({ length: 45 }, (_, i) => i));
    setLasers([]);
    setScore(0);
    setGameOver(false);
    setIsRunning(true);
    direction.current = 1;
  };

  // ---- Mover shooter con teclado ----
  useEffect(() => {
    if (!isRunning) return;
    const handleKey = (e) => {
      if (gameOver) return;
      if (e.key === "ArrowLeft" && shooter % WIDTH !== 0) {
        setShooter((s) => s - 1);
      }
      if (e.key === "ArrowRight" && shooter % WIDTH !== WIDTH - 1) {
        setShooter((s) => s + 1);
      }
      if (e.key === " " || e.key === "Spacebar") {
        setLasers((prev) => [...prev, shooter]);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [shooter, gameOver, isRunning]);

  // ---- Movimiento de lasers ----
  useEffect(() => {
    if (!isRunning || gameOver) return;
    const interval = setInterval(() => {
      setLasers((prev) =>
        prev
          .map((l) => l - WIDTH) // sube una fila
          .filter((l) => l >= 0)
      );
    }, 100);
    return () => clearInterval(interval);
  }, [isRunning, gameOver]);

  // ---- Movimiento de invaders ----
  useEffect(() => {
    if (!isRunning || gameOver) return;
    const interval = setInterval(() => {
      setInvaders((prev) => {
        if (prev.length === 0) return prev;
        let atLeftEdge = prev[0] % WIDTH === 0;
        let atRightEdge = prev[prev.length - 1] % WIDTH === WIDTH - 1;
        let newDir = direction.current;

        if ((atLeftEdge && newDir === -1) || (atRightEdge && newDir === 1)) {
          newDir = WIDTH; // bajar una fila
        } else if (newDir === WIDTH) {
          newDir = atLeftEdge ? 1 : -1;
        }

        direction.current = newDir;
        return prev.map((i) => i + newDir);
      });
    }, 500);
    return () => clearInterval(interval);
  }, [isRunning, gameOver]);

  // ---- Colisiones ----
  useEffect(() => {
    if (!isRunning) return;
    setInvaders((prevInvaders) => {
      const hits = lasers.filter((l) => prevInvaders.includes(l));
      if (hits.length > 0) {
        setScore((s) => s + hits.length);
        setLasers((prevLasers) => prevLasers.filter((l) => !hits.includes(l)));
        return prevInvaders.filter((inv) => !hits.includes(inv));
      }
      return prevInvaders;
    });
  }, [lasers, isRunning]);

  // ---- Game Over ----
  useEffect(() => {
    if (!isRunning) return;
    if (invaders.includes(shooter) || invaders.some((i) => i >= TOTAL - WIDTH)) {
      setGameOver(true);
      setIsRunning(false);
    }
    if (invaders.length === 0) {
      setGameOver(true);
      setIsRunning(false);
    }
  }, [invaders, shooter, isRunning]);

  return (
    <div className="battle-container">
      <h3>
        Space Invaders - Score: {score}{" "}
        {gameOver && <span className="gameover"> GAME OVER</span>}
      </h3>

      {!isRunning && !gameOver && (
        <button className="start-btn" onClick={startGame}>
          ▶ Start Game
        </button>
      )}

      {(isRunning || gameOver) && (
        <div className="grid">
          {Array.from({ length: TOTAL }).map((_, i) => {
            let className = "";
            if (i === shooter) className = "shooter";
            if (invaders.includes(i)) className = "invader";
            if (lasers.includes(i)) className = "laser";
            return <div key={i} className={className}></div>;
          })}
        </div>
      )}

      {gameOver && (
        <button className="start-btn" onClick={startGame}>
          🔄 Restart
        </button>
      )}

      {/* Controles táctiles */}
      {isRunning && (
        <div className="controls">
          <button
            onClick={() => shooter % WIDTH !== 0 && setShooter((s) => s - 1)}
          >
            ⬅️
          </button>
          <button
            onClick={() =>
              shooter % WIDTH !== WIDTH - 1 && setShooter((s) => s + 1)
            }
          >
            ➡️
          </button>
          <button onClick={() => setLasers((prev) => [...prev, shooter])}>
            🔫 Shoot!
          </button>
        </div>
      )}
    </div>
  );
}
