import React, { useState } from 'react';
import Field from './Field'
import styled from 'styled-components'
import Player from "./Player"
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider';

function App() {


  const [state, setState] = useState({
    checked: false,
    slider: 0
  });


  const handleChange = (event, newValue) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleChangeSlider = (event) => {
    console.log("event.target.checked: " + event.target.checked);
    setState({ ...state, slider: event.target.checked });
  };



 

    return <CanvasWrapper><FootballField><Field  />

<Player startX={400} startY={1200} endX={500} endY={1000} animation={state.checked}></Player>
<Player startX={100} startY={800} endX={500} endY={100}  animation={state.checked}></Player>
<Player startX={250} startY={1000} endX={500} endY={700} animation={state.checked}></Player>
  <Player startX={550} startY={1000} endX={500} endY={700} animation={state.checked}></Player>
  <Player startX={700} startY={800} endX={500} endY={100} animation={state.checked}></Player>


  <Player startX={550} startY={800} endX={500} endY={300} animation={state.checked}></Player>
  <Player startX={250} startY={800} endX={500} endY={300} animation={state.checked}></Player>


  <Player startX={415} startY={600} endX={500} endY={500} animation={state.checked}></Player>



  <Player startX={415} startY={400} endX={500} endY={100} animation={state.checked}></Player>
  <Player startX={530} startY={400} endX={500} endY={100} animation={state.checked}></Player>
  <Player startX={300} startY={400} endX={500} endY={100} animation={state.checked}></Player>
  </FootballField>
  <Center>


  <FormControlLabel
        control={
          <CssSwitch
            checked={state.checked}
            onChange={handleChange}
            name="checked"
            color="primary"
          />
        }
        label={<span style={{ fontSize: '2rem', color: "white" }}>Animation</span>}

      />
       <PositionWrapper>
   <Autocomplete
      id="combo-box-1"
      options={roles}
      className="first-element"
 
      getOptionLabel={(option) => option.name}
      style={{ width: 300, paddingBottom: "2em" }}
      renderInput={(params) => <CssTextField {...params} 
        label="Role"  variant="outlined" />}
    />
        <Autocomplete
      id="combo-box-2"
      options={positions}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => <CssTextField {...params} 
        label="Position" variant="outlined" />}
    />
    </PositionWrapper>
      
    </Center>
  </CanvasWrapper>
  
}

const FootballField = styled.div`
position: relative;
width: 50%;
@media only screen and (max-width: 768px) {
  width: 100%;

}
`

const PositionWrapper = styled.div`
display: flex;
margin-top: 1em;

.first-element {
  margin-right: 2em;
}
@media only screen and (max-width: 700) {
flex-wrap: wrap
> div {
  width: 100%
}

`
const Center = styled.div`
display:flex;
justify-content: flex-start;
flex-direction: column;
@media only screen and (max-width: 768px) {

order: -1;
width: 100%;
}

`


const CssSwitch = withStyles({
  root: {
    '& span': {
      color: "white",
      fontSize: "2em"

    },
    '& .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track': {
      backgroundColor: "white"
    },
    '& .MuiTypography-body1': {
      fontSize: "2em"

    },
    '&  .MuiFormControlLabel-root': {
      marginBottom: "1em"
    }
  }
})(Switch)

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiFormLabel-root, & .MuiInputBase-input, & .MuiIconButton-root ': {
      color: "white"
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(TextField);


const roles = [
  { name: 'Sweeper Keeper'},
  { name: 'Goalkeeper'},
  { name: 'Central Defender'},
  { name: 'Ball Playing Defender'},
  { name: 'Libero'},
  { name: 'No Nonsense Central Defender'},
  { name: 'Fullback'},
  { name: 'Wingback'},
  { name: 'Inverted Wingback'},
  { name: 'Complete Wingback'},
  { name: 'Segundo Volante'},
  { name: 'Anchor Man'},
  { name: 'Regista'},
  { name: 'Defensive Midfielder'},
  { name: 'Ball Winning Midfielder'},
  { name: 'Roaming Playmaker'},
  { name: 'Wide Target Man'},
  { name: 'Raumdeuter'},
  { name: 'Inside forward '},
  { name: 'Inverted Winger'},

  




]
  
  
  ;
 
  const positions = [
    { name: 'DM'}];  

const CanvasWrapper = styled.div`

position: relative;
padding: 2em;
display: flex;
justify-content: space-evenly;

canvas {
        width: 40vw !important;
        height: 90vh !important;;
        display: block;
      }
      @media only screen and (max-width: 768px) {
flex-wrap: wrap;
canvas {
  width: 86vw !important;
        height: 90vh !important;;
}
}
`



/*canvas { display: block; width: 60vw; height: 65vh; }*/


export default App