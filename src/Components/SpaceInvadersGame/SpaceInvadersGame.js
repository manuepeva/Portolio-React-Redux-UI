import React, { useState, useEffect, useRef } from "react";
import "./SpaceInvadersGame.scss";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const WIDTH = 15;
const HEIGHT = 15;
const TOTAL = WIDTH * HEIGHT;

export default function SpaceInvadersGame() {
  const { t } = useTranslation();
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
        const columns = invaders.map((i) => i % WIDTH);
        const atLeftEdge = columns.includes(0);
        const atRightEdge = columns.includes(WIDTH - 1);
        let newDir = direction.current;

        if ((atLeftEdge && newDir === -1) || (atRightEdge && newDir === 1)) {
          newDir = WIDTH * 0.2; // bajar una fila
        } else if (newDir === WIDTH) {
          newDir = atLeftEdge ? 1 : -1;
        }

        direction.current = newDir;
        return prev.map((i) => i + newDir);
      });
    }, 500);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [isRunning, gameOver]);

  // ---- Colisiones ----
  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
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
    /* eslint-disable react-hooks/set-state-in-effect */
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
    <Box className="battle-container">
      <Typography variant="h3">
        Space Invaders - {t("spaceInvaders.score")} {score}{" "}
        {gameOver && <span className="gameover">{t("spaceInvaders.gameOver")}</span>}
      </Typography>

      {!isRunning && !gameOver && (
        <Button variant="contained" className="start-btn" onClick={startGame}>
          ▶ {t("spaceInvaders.startGame")}
        </Button>
      )}

      {(isRunning || gameOver) && (
        <Box className="grid">
          {Array.from({ length: TOTAL }).map((_, i) => {
            let className = "";
            if (i === shooter) className = "shooter";
            if (invaders.includes(i)) className = "invader";
            if (lasers.includes(i)) className = "laser";
            return <div key={i} className={className}></div>;
          })}
        </Box>
      )}

      {gameOver && (
        <Button
          variant="contained"
          sx={{ m: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 } }}
          className="start-btn"
          onClick={startGame}
        >
          🔄 {t("spaceInvaders.restart")}
        </Button>
      )}

      {/* Controles táctiles */}
      {isRunning && (
        <Box className="controls">
          <Button onClick={() => shooter % WIDTH !== 0 && setShooter((s) => s - 1)}>⬅️</Button>
          <Button onClick={() => shooter % WIDTH !== WIDTH - 1 && setShooter((s) => s + 1)}>
            ➡️
          </Button>
          <Button onClick={() => setLasers((prev) => [...prev, shooter])}>
            🔫 {t("spaceInvaders.shoot")}
          </Button>
        </Box>
      )}
    </Box>
  );
}
