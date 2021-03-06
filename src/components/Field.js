import React, { useRef, useEffect, useCallback } from 'react'
import styled from "styled-components"
import { resize } from "./../helpers/canvas"
const Field = ({ colors, ...props }) => {

    const canvasRef = useRef(null)
    const background = colors.background
    const primary = colors.primary

    const draw = useCallback((context, background, primary) => {

        resize(context.canvas);

        context.clearRect(0, 0, context.canvas.width, context.canvas.height)
        context.beginPath()
        context.arc(50, 100, 20 * Math.sin(1 * 0.05) ** 2, 0, 2 * Math.PI)
        context.fill()
        context.fillStyle = background
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)

        context.beginPath();
        context.moveTo(0, context.canvas.height / 2);
        context.lineTo(context.canvas.width, context.canvas.height / 2);
        context.strokeStyle = primary;
        context.lineWidth = 1.5;

        context.stroke();
        context.closePath();

        //Mid circle
        context.beginPath()
        context.arc(context.canvas.width / 2, context.canvas.height / 2, 73, 0, 2 * Math.PI, false);
        context.stroke();
        context.closePath();

        //Home penalty box
        context.beginPath();
        context.rect((context.canvas.width - 323) / 2, context.canvas.height - 132, 322, 132);
        context.stroke();
        context.closePath();

        //Home goal box
        context.beginPath();
        context.rect((context.canvas.width - 146) / 2, context.canvas.height - 44, 146, 44);
        context.stroke();
        context.closePath();

        //Home half circle
        context.beginPath()
        context.arc((context.canvas.width / 2), context.canvas.height - 100, 73, -0.145 * Math.PI, 1.145 * Math.PI, true);
        context.stroke();
        context.closePath();

        //Away penalty box
        context.beginPath();
        context.rect((context.canvas.width - 322) / 2, 0, 322, 132);
        context.stroke();
        context.closePath();

        //Away goal box
        context.beginPath();
        context.rect((context.canvas.width - 146) / 2, 0, 146, 44);
        context.stroke();
        context.closePath();

        //Away half circle
        context.beginPath()
        context.arc((context.canvas.width / 2), 100, 73, 0.857 * Math.PI, 4.145 * Math.PI, true);
        context.stroke();
        context.closePath();

    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        const render = () => {
            draw(context, background, primary)

        }
        render()



    }, [draw, canvasRef, background, primary])

    return <StyledField id="field" width="10" height="15" ref={canvasRef} {...props} />
}



const StyledField = styled.canvas`
position: absolute;
left: 0;
margin-bottom: 1em;

`

export default Field;