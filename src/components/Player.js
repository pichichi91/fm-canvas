import React from 'react';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';

const getPixelRatio = context => {
    var backingStore =
        context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio ||
        1;

    return (window.devicePixelRatio || 1) / backingStore;
};



const Player = ({ startX, startY, endX, endY, animation, colors,  ...props }) => {
    let ref = useRef();
    const [state] = useState({
        x: startX, y: startY, speedX: endX - startX, speedY: endY - startY
    });

    const ballRadius = 20;


    useEffect(() => {
        let canvas = ref.current;
        let context = canvas.getContext('2d');

        let ratio = getPixelRatio(context);
        let width = getComputedStyle(canvas)
            .getPropertyValue('width')
            .slice(0, -2);
        let height = getComputedStyle(canvas)
            .getPropertyValue('height')
            .slice(0, -2);

        canvas.width = width * ratio;
        canvas.height = height * ratio;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        let requestId;

        if(state.x === startX){
            const sizeRatio = 1 / 800 * canvas.width
            state.x = state.x * sizeRatio
        }


        const speedY = Math.abs(endY - startY) / -500;
        const drawBall = () => {
            context.beginPath();
            context.arc(state.x, state.y, ballRadius, 0, Math.PI * 2);
            context.fillStyle = colors.secondary;
            context.fill();
            context.closePath();
        }

        const render = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            drawBall();

            if (animation) {
            state.y += speedY;
            }

            if (state.y <= endY) {
                state.y = startY;
            }
            if (state.y + speedY > state.endY - ballRadius || state.y + speedY < ballRadius) {
                state.y = startY;


            }


            requestId = requestAnimationFrame(render);
            if (!animation) {
                cancelAnimationFrame(requestId);

            }

        };



        render();
        return () => {
            cancelAnimationFrame(requestId);
        };
    });

    return (
        <StyledPlayer key={Math.random()} className="player-canvas"
            ref={ref}

        />
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