import React from 'react';
import { useEffect } from 'react';
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


const Player = (...props) => {
    let ref = useRef();


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
        var x = canvas.width / 2;
        var y = canvas.height - 30;
        var ballRadius = 10;
        var dy = -2;
        const drawBall = () => {
            context.beginPath();
            context.arc(x, y, ballRadius, 0, Math.PI * 2);
            context.fillStyle = "#d2ff00";
            context.fill();
            context.closePath();
        }

        const render = () => {

            context.clearRect(0, 0, canvas.width, canvas.height);
            drawBall();

                y += dy;
            

            if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
                y = canvas.height - 30;


            }

            
                requestId = requestAnimationFrame(render);
            if(!props[0].animation){
                console.log(props[0].animation)

                cancelAnimationFrame(requestId);

            }

        };



        render();
        return () => {
            cancelAnimationFrame(requestId);
        };
    });

    return (
        <StyledPlayer className="player-canvas"
            ref={ref}
            
        />
    );
};

const StyledPlayer = styled.canvas`

width: 800px;
  height: 800px;
  position: absolute;
  left: 190px;
  @media only screen and (max-width: 768px) {
  left: 0;
  top: 190px;
  }

`


export default Player;