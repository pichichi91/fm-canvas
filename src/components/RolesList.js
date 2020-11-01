import styled from 'styled-components'
import {StyledButton } from "./Styling"
import ClearIcon from '@material-ui/icons/Clear';



const  RoleList = ({...props}) => {

return(
<RolesList> <ol>
      {props.selectedRoles.map((role, index) => (
        <li key={index}> {role}

          <StyledButton onClick={() => { props.onRemoveItem(index) }} ><ClearIcon style={{ color: "red", paddingLeft: "0.5em", position: "relative" }} /></StyledButton>



        </li>
      ))}
    </ol></RolesList>

)


}


const RolesList = styled.div`

color: white;
    font-size: 1.5em;

    ol { 
    counter-reset: item;
    list-style-type: none;
    padding-left: 0em;
}
li { display: block; }
li:before { 
    content: counter(item) "  "; 
    counter-increment: item;
    font-weight: bold;
    color: #d2ff00;
    width: 1em;
    padding-right: 0.4em;
    text-align: right

}
li:nth-child(-n+9):before {
  padding-right: 1em;

}
`

export default RoleList;


