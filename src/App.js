import React from 'react'
import Canvas from './Canvas'
import styled, { withTheme } from 'styled-components'
import Circle from "./Circle"
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { withStyles, makeStyles } from "@material-ui/core/styles";



function App() {




    return <CanvasWrapper><CanvasBorder><Canvas width="718" height="1000" /></CanvasBorder>
  <Circle></Circle>
  <Center>

       <PositionWrapper>
    <Number>1</Number>   <Autocomplete
      id="combo-box-demo"
      options={roles}
      className="first-element"
      getOptionLabel={(option) => option.name}
      style={{ width: 300, paddingBottom: "2em" }}
      renderInput={(params) => <CssTextField {...params} 
        label="Role" color="white" variant="outlined" />}
    />
        <Autocomplete
      id="combo-box-demo"
      options={positions}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => <CssTextField {...params} 
        label="Position" color="white" variant="outlined" />}
    />
    </PositionWrapper>
       <PositionWrapper>
    <Number>2</Number>   <Autocomplete
      id="combo-box-demo"
      options={roles}
      className="first-element"
      getOptionLabel={(option) => option.name}
      style={{ width: 300, paddingBottom: "2em" }}
      renderInput={(params) => <CssTextField {...params} 
        label="Role" color="white" variant="outlined" />}
    />
        <Autocomplete
      id="combo-box-demo"
      options={positions}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => <CssTextField {...params} 
        label="Position" color="white" variant="outlined" />}
    />
    </PositionWrapper>
       <PositionWrapper>
    <Number>3</Number>   <Autocomplete
      id="combo-box-demo"
      options={roles}
      className="first-element"
      getOptionLabel={(option) => option.name}
      style={{ width: 300, paddingBottom: "2em" }}
      renderInput={(params) => <CssTextField {...params} 
        label="Role" color="white" variant="outlined" />}
    />
        <Autocomplete
      id="combo-box-demo"
      options={positions}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => <CssTextField {...params} 
        label="Position" color="white" variant="outlined" />}
    />
    </PositionWrapper>
       <PositionWrapper>
    <Number>4</Number>   <Autocomplete
      id="combo-box-demo"
      options={roles}
      className="first-element"
      getOptionLabel={(option) => option.name}
      style={{ width: 300, paddingBottom: "2em" }}
      renderInput={(params) => <CssTextField {...params} 
        label="Role" color="white" variant="outlined" />}
    />
        <Autocomplete
      id="combo-box-demo"
      options={positions}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => <CssTextField {...params} 
        label="Position" color="white" variant="outlined" />}
    />
    </PositionWrapper>
       <PositionWrapper>
    <Number>5</Number>   <Autocomplete
      id="combo-box-demo"
      options={roles}
      className="first-element"
      getOptionLabel={(option) => option.name}
      style={{ width: 300, paddingBottom: "2em" }}
      renderInput={(params) => <CssTextField {...params} 
        label="Role" color="white" variant="outlined" />}
    />
        <Autocomplete
      id="combo-box-demo"
      options={positions}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => <CssTextField {...params} 
        label="Position" color="white" variant="outlined" />}
    />
    </PositionWrapper>
       <PositionWrapper>
    <Number>6</Number>   <Autocomplete
      id="combo-box-demo"
      options={roles}
      className="first-element"
      getOptionLabel={(option) => option.name}
      style={{ width: 300, paddingBottom: "2em" }}
      renderInput={(params) => <CssTextField {...params} 
        label="Role" color="white" variant="outlined" />}
    />
        <Autocomplete
      id="combo-box-demo"
      options={positions}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => <CssTextField {...params} 
        label="Position" color="white" variant="outlined" />}
    />
    </PositionWrapper>
       <PositionWrapper>
    <Number>7</Number>   <Autocomplete
      id="combo-box-demo"
      options={roles}
      className="first-element"
      getOptionLabel={(option) => option.name}
      style={{ width: 300, paddingBottom: "2em" }}
      renderInput={(params) => <CssTextField {...params} 
        label="Role" color="white" variant="outlined" />}
    />
        <Autocomplete
      id="combo-box-demo"
      options={positions}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => <CssTextField {...params} 
        label="Position" color="white" variant="outlined" />}
    />
    </PositionWrapper>
       <PositionWrapper>
    <Number>8</Number>   <Autocomplete
      id="combo-box-demo"
      options={roles}
      className="first-element"
      getOptionLabel={(option) => option.name}
      style={{ width: 300, paddingBottom: "2em" }}
      renderInput={(params) => <CssTextField {...params} 
        label="Role" color="white" variant="outlined" />}
    />
        <Autocomplete
      id="combo-box-demo"
      options={positions}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => <CssTextField {...params} 
        label="Position" color="white" variant="outlined" />}
    />
    </PositionWrapper>
       <PositionWrapper>
    <Number>9</Number>   <Autocomplete
      id="combo-box-demo"
      options={roles}
      className="first-element"
      getOptionLabel={(option) => option.name}
      style={{ width: 300, paddingBottom: "2em" }}
      renderInput={(params) => <CssTextField {...params} 
        label="Role" color="white" variant="outlined" />}
    />
        <Autocomplete
      id="combo-box-demo"
      options={positions}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => <CssTextField {...params} 
        label="Position" color="white" variant="outlined" />}
    />
    </PositionWrapper>
    <PositionWrapper>
<Number2>10</Number2>
    <Autocomplete
      id="combo-box-demo"
      options={roles}
      className="first-element"
      getOptionLabel={(option) => option.name}
      style={{ width: 300, paddingBottom: "2em" }}
      renderInput={(params) => <CssTextField {...params} 
        label="Role" color="white" variant="outlined" />}
    />
        <Autocomplete
      id="combo-box-demo"
      options={positions}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => <CssTextField {...params} 
        label="Position" color="white" variant="outlined" />}
    />
    </PositionWrapper>
    <PositionWrapper>
    <Number2>11</Number2>
    <Autocomplete
      id="combo-box-demo"
      options={roles}
      className="first-element"
      getOptionLabel={(option) => option.name}
      style={{ width: 300, paddingBottom: "2em" }}
      renderInput={(params) => <CssTextField {...params} 
        label="Role" color="white" variant="outlined" />}
    />
        <Autocomplete
      id="combo-box-demo"
      options={positions}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => <CssTextField {...params} 
        label="Position" color="white" variant="outlined" />}
    />
    </PositionWrapper>
    </Center>
  </CanvasWrapper>

}

const PositionWrapper = styled.div`
display: flex;

.first-element {
  margin-right: 2em;
}

`
const Center = styled.div`
display:flex;
justify-content: flex-end;
flex-direction: column;
`

const Number = styled.div`
color: white;
    font-size: xx-large;
    padding-right: 1.5em;
    line-height: 1.5em;
    font-weight: bolder;
}

`
const Number2 = styled.div`
color: white;
    font-size: xx-large;
    padding-right: 1em;
    line-height: 1.5em;
    font-weight: bolder;
}

`


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
padding: 2em;
display: flex;
justify-content: space-around;`

const CanvasBorder = styled.div`
border: 5px solid #d2ff00;
`

/*canvas { display: block; width: 60vw; height: 65vh; }*/


export default App