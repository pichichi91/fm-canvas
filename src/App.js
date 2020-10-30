import React from 'react'
import Canvas from './Canvas'
import styled, { withTheme } from 'styled-components'
import Circle from "./Circle"

function App() {

  return <CanvasWrapper><CanvasBorder><Canvas width="718" height="1000" /></CanvasBorder>
  <Circle></Circle></CanvasWrapper>

}


const CanvasWrapper = styled.div`
padding: 2em;
display: flex;
justify-content: space-between;`

const CanvasBorder = styled.div`
border: 5px solid #d2ff00;
`

/*canvas { display: block; width: 60vw; height: 65vh; }*/


export default App