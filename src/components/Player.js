import React from 'react';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';

import { resize } from "./../helpers/canvas"

const Player = ({ startX, startY, endX, endY, animation, colors, speed, ...props }) => {
    const canvasRef = useRef();

    const [ballRadius] = useState(15)
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        let x = startX;
        let y = startY;

        const speedY = (Math.abs(endY - startY) / - 800) * 0.5 * speed;
        const speedX = Math.abs(endX - startX) / - 800 * 0.5 * speed;

        function drawBall() {
            context.beginPath();
            context.arc(x, y, ballRadius, 0, Math.PI * 2);
            context.fillStyle = colors.secondary;
            context.fill();
            context.closePath();
        }

        function draw() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            drawBall();
            if (animation && y > endY) {
                y += speedY;
            }
            if (animation && x > endX) {
                x += speedX;
            }

            if (x > endX && y > endY) {
                y = startY;
                x = startX;
            }
        }

        resize(canvas)
        draw()
        setInterval(draw, 1);

    });

    return (
        <StyledPlayer key={Math.random()} className="player-canvas"
            ref={canvasRef} />
    );
};

const StyledPlayer = styled.canvas`

width: 800px;
  height: 800px;
  position: absolute;
  left: 0;
  @media only screen and (max-width: 768px) {
  left: 0;
  top: 0;
  }

`


export default Player;