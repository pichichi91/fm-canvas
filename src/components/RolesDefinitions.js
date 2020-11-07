import DataTable, { createTheme } from 'react-data-table-component';
import AddIcon from '@material-ui/icons/Add';
import { StyledButton, Center } from "./Styling"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

import MenuItem from '@material-ui/core/MenuItem';

import React from 'react';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));




const RolesDefinitions = ({ roles, setRoles, colors }) => {
  const classes = useStyles();

  const [duty, setDuty] = React.useState('');
  const [position, setPosition] = React.useState('');
  const [startPosition, setStartPosition] = React.useState({X: 0, Y: 0});
  const [roleName, setRoleName] = React.useState('');

  const [endPosition, setEndPosition] = React.useState({X: 0, Y: 0});

  const handleChangePosition = (event) => {
    setPosition(event.target.value);

  }

  const handleChangeDuty = (event) => {
    setDuty(event.target.value);


  }
  const onChangeRole = (event) => {
    setRoleName(event.target.value);


  }
  

  const onClickStart = (event) => {
    const xPosition = event.clientX -110;
    const yPosition = event.clientY -200



    setStartPosition({X: xPosition * 2, Y: yPosition * 2})
  }

  const handleClickButtton = () => {
    const newRole = {id: roles.length + 1, role: roleName, duty: duty, position: position, startX: startPosition.X, startY: startPosition.Y, endX: endPosition.X , endY: endPosition.Y}

    setRoles(roles => ([...roles, newRole]));

  }

  const onClickEnd = (event) => {
    const xPosition = event.clientX -607;
    const yPosition = event.clientY -200

    setEndPosition({X: xPosition * 2, Y: yPosition * 2})
  }

  createTheme('canvasTheme', {

    background: {
      default: "#00000000",
      text: 'inherit',

    },
    context: {
      background: '#00000000',
      text: 'inherit',
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
  ];

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: colors.primary
      }
    }
  });

  const customStyles = {
    header: {
      style: {
        color: colors.secondary,
        fontSize: "2em"

      }
    },
    rows: {
      style: {
        color: colors.primary,

      }
    },

    headCells: {
      style: {
        fontSize: "1.3em",

        color: colors.secondary,
        paddingLeft: '16px',
        paddingRight: '16px',
        borderBottomStyle: 'solid',
        borderBottomWidth: '0.5px',
        borderBottomColor: colors.secondary,
      },
      activeSortStyle: {
        color: colors.secondary,
        '&:focus': {
          outline: 'none',
        },
        '&:hover:not(:focus)': {
          color: colors.secondary,
        },
      },
      inactiveSortStyle: {
        '&:focus': {
          outline: 'none',
          color: colors.secondary,
        },
        '&:hover': {
          color: colors.secondary,
        },
      },
    },
  }



  return (
    <div style={{ width: "90%" }}>

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
        <Center colors={colors}>

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



          <div style={{display: "flex", marginTop: "2em"}}>
      <PitchBox onClick={onClickStart}>Start</PitchBox>
      <PitchBox onClick={onClickEnd}>End</PitchBox>
      <div>
      <div style={{marginBottom: "1em"}}><strong>Starting-Point:</strong> <span style={{marginLeft: "0.5em"}}>X: {startPosition.X}, Y: {startPosition.Y}</span> </div>
      <div><strong>Ending-Point:</strong> <span style={{marginLeft: "0.5em"}}>X: {endPosition.X}, Y: {endPosition.Y}</span></div>

        
        
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


const PitchBox = styled.div`
    width: 400px;
    height: 400px;
    background: rgb(210, 255, 0);
    font-weight: 800;
    margin-right: 3em;
    padding: 100px;
    font-size: 2em;
    color: rgb(50, 20, 80);
    box-sizing: border-box;
`

export default RolesDefinitions;