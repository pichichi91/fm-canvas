import DataTable, { createTheme } from 'react-data-table-component';
import AddIcon from '@material-ui/icons/Add';
import { StyledButton, Center } from "./Styles"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';

import MenuItem from '@material-ui/core/MenuItem';

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    color: "white"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

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



const RolesDefinitions = ({ roles, setRoles, colors }) => {




  const classes = useStyles();

  const [duty, setDuty] = React.useState('');
  const [position, setPosition] = React.useState('');
  const [startPosition, setStartPosition] = React.useState({ X: 0, Y: 0 });
  const [roleName, setRoleName] = React.useState('');

  const [endPosition, setEndPosition] = React.useState({ X: 0, Y: 0 });

  const handleChangePosition = (event) => {
    setPosition(event.target.value);

  }

  const handleChangeDuty = (event) => {
    setDuty(event.target.value);


  }
  const onChangeRole = (event) => {
    setRoleName(event.target.value);


  }

  const onRemoveItem = (index) => {
    console.log(index)
    const filtered_roles = roles.filter(role => role.id !== index);

    console.log(filtered_roles)
    setRoles(roles.filter(role => role.id !== index))

  }


  const onClickStart = (event) => {
    const rect = event.target.getBoundingClientRect();
    const xPosition = event.clientX - rect.left; //x position within the element.
    const yPosition = event.clientY - rect.top;  //y position within the element.



    setStartPosition({ X: (xPosition * 2), Y: (yPosition * 2) })

  }

  const handleClickButtton = () => {
    const newRole = { id: roles.length + 1, role: roleName, duty: duty, position: position, startX: startPosition.X, startY: startPosition.Y, endX: endPosition.X, endY: endPosition.Y }

    setRoles(roles => ([...roles, newRole]));

  }

  const onClickEnd = (event) => {
    const rect = event.target.getBoundingClientRect();
    const xPosition = event.clientX - rect.left; //x position within the element.
    const yPosition = event.clientY - rect.top;  //y position within the element.

    setEndPosition({ X: (xPosition * 2), Y: (yPosition * 2) })
  }

  createTheme('canvasTheme', {

    background: {
      default: "#321450",
      text: 'white',

    },
    context: {
      background: '#321450',
      text: "white",
    },

  });


  const data = [
    { id: 1, role: "Fullback", duty: "Defend", position: "DL", startX: 100, startY: 600, endX: 100, endY: 150 },
    { id: 2, role: "Fullback", duty: "Support", position: "DL", startX: 100, startY: 600, endX: 30, endY: 300 },
    { id: 3, role: "Fullback", duty: "Attack", position: "DL", startX: 100, startY: 500, endX: 30, endY: 300 },



  ]
  if (roles.length === 0) {
    setRoles(data);

  }

  const columns = [
    {
      name: 'Role',
      selector: 'role',
      sortable: true,
    },
    {
      name: 'Duty',
      selector: 'duty',
      sortable: true,
    },
    {
      name: 'Position',
      selector: 'position',
      sortable: true,
    },
    {
      name: 'StartingX',
      selector: 'startX',
      sortable: true,
    },
    {
      name: 'StartingY',
      selector: 'startY',
      sortable: true,
    },
    {
      name: 'EndingX',
      selector: 'endX',
      sortable: true,
    },
    {
      name: 'EndingY',
      selector: 'endY',
      sortable: true,
    },
    {
      name: 'Delete',
      sortable: false,
      cell: row => <div><StyledButton onClick={() => { onRemoveItem(row.id) }} ><ClearIcon style={{ color: "red", position: "relative" }} /></StyledButton></div>,
    },
  ];

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#fff"
      }
    }
  });

  const customStyles = {
    header: {
      style: {
        color: "#D2FF00",
        fontSize: "2em"

      }
    },
    rows: {
      style: {
        color: "white",

      }
    },

    headCells: {
      style: {
        fontSize: "1.3em",

        color: "#D2FF00",
        paddingLeft: '16px',
        paddingRight: '16px',
        borderBottomStyle: 'solid',
        borderBottomWidth: '0.5px',
        borderBottomColor: "#D2FF00",
      },
      activeSortStyle: {
        color: "#D2FF00",
        '&:focus': {
          outline: 'none',
        },
        '&:hover:not(:focus)': {
          color: "#D2FF00",
        },
      },
      inactiveSortStyle: {
        '&:focus': {
          outline: 'none',
          color: "#D2FF00",
        },
        '&:hover': {
          color: "#D2FF00",
        },
      },
    },
  }

  const recalculateCanvas = (canvas, context) => {
    const ratio = getPixelRatio(context);
    const width = getComputedStyle(canvas)
      .getPropertyValue('width')
      .slice(0, -2);
    const height = getComputedStyle(canvas)
      .getPropertyValue('height')
      .slice(0, -2);

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

  }

  const Canvas = ({ colors, positions }) => {
    //console.log({props})

    const canvasRef = useRef(null)
    const ballRadius = 10;

    useEffect(() => {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')

      recalculateCanvas(canvas, context)

      context.beginPath();
      context.arc(positions.X * 0.5, positions.Y * 0.5, ballRadius, 0, Math.PI * 2);
      context.fillStyle = colors.secondary;
      context.fill();
      context.closePath();
    }, [colors.secondary, ballRadius, positions])

    return <StyledCanvas ref={canvasRef} />
  }


  const pageColors = { "primary": "#fff", "background": "#321450", "secondary": "#d2ff00" }

  return (
    <div style={{ width: "90%", color: "white" }}>

      <DataTable
        title="Player Roles"
        columns={columns}
        defaultSortField="Role"
        dense={true}
        data={roles}
        theme="canvasTheme"
        customStyles={customStyles}

      />
      <MuiThemeProvider theme={theme}>
        <Center colors={pageColors}>

          <form style={{ marginTop: "2em" }} noValidate autoComplete="off">

            <div>
              <TextField onChange={onChangeRole} id="outlined-basic" value={roleName} label="Rolename" variant="outlined" color="primary" style={{ marginTop: "8px" }} />
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Position</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={position}
                  onChange={handleChangePosition}
                  label="Position"
                >

                  <MenuItem value="GK">GK</MenuItem>
                  <MenuItem value="CD">CD</MenuItem>
                  <MenuItem value="LB">LB</MenuItem>
                  <MenuItem value="RB">RB</MenuItem>
                  <MenuItem value="WBR">WBR</MenuItem>
                  <MenuItem value="WBL">WBL</MenuItem>
                  <MenuItem value="DM">DM</MenuItem>

                  <MenuItem value="MR">MR</MenuItem>
                  <MenuItem value="ML">ML</MenuItem>
                  <MenuItem value="CM">CM</MenuItem>
                  <MenuItem value="AMC">AMC</MenuItem>
                  <MenuItem value="AMR">AMR</MenuItem>
                  <MenuItem value="AML">AML</MenuItem>
                  <MenuItem value="ST">ST</MenuItem>

                </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Duty</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={duty}
                  onChange={handleChangeDuty}
                  label="Position"
                >

                  <MenuItem value="Defend">Defend</MenuItem>
                  <MenuItem value="Support">Support</MenuItem>
                  <MenuItem value="Attack">Attack</MenuItem>
                </Select>
              </FormControl>

            </div>
          </form>

          <div>

          </div>



          <div style={{ display: "flex", marginTop: "2em", flexWrap: "wrap" }}>
            <PitchBox onClick={onClickStart}>

              <Canvas colors={colors} positions={startPosition} />


            </PitchBox>
            <PitchBox onClick={onClickEnd}>
              <Canvas colors={colors} positions={endPosition} />

            </PitchBox>
            <div style={{ paddingTop: "1em" }}>
              <div style={{ marginBottom: "1em" }}><strong>Starting-Point:</strong> <span style={{ marginLeft: "0.5em" }}>X: {startPosition.X}, Y: {startPosition.Y}</span> </div>
              <div><strong>Ending-Point:</strong> <span style={{ marginLeft: "0.5em" }}>X: {endPosition.X}, Y: {endPosition.Y}</span></div>



            </div>

          </div>


          <StyledButton colors={colors}
            variant="outlined"
            size="large"
            color="primary"
            style={{ marginTop: "2em" }}
            startIcon={<AddIcon />}
            onClick={handleClickButtton}
          >
            Add Role to Settings
        </StyledButton>
        </Center>
      </MuiThemeProvider>


    </div>)
}

const StyledCanvas = styled.canvas`

`

const PitchBox = styled.div`
    width: 405px;
    height: 405px;
    background: rgb(210, 255, 0);
    font-weight: 800;
    margin-right: 1em;
    font-size: 2em;
    color: rgb(50, 20, 80);
    box-sizing: border-box;
    background-image: url(/pitch.png);
    background-size: cover;
    border: 5px solid #ffffff08;

    canvas {
      width: inherit;
      height: inherit;
    }
`

export default RolesDefinitions;