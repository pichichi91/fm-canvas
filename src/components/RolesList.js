import styled from 'styled-components'
import { StyledButton } from "./Styling"
import ClearIcon from '@material-ui/icons/Clear';



const RoleList = ({ ...props }) => {

  return (
    <RolesList colors={props.colors}> <ol>
      {props.selectedRoles.map((role, index) => (
        <li key={index}>


          {role.role} <span style={{ fontSize: "0.6em" }}><strong>Duty</strong>: {role.duty}, <strong>Position</strong>: {role.position}</span>

          <StyledButton onClick={() => { props.onRemoveItem(index) }} ><ClearIcon style={{ color: "red", position: "relative" }} /></StyledButton>



        </li>
      ))}
    </ol></RolesList>

  )


}


const RolesList = styled.div`

color: ${props => props.colors.primary};
    font-size: 1.4em;

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
    color: ${props => props.colors.secondary};
    width: 1em;
    padding-right: 0.4em;
    text-align: right

}
li:nth-child(-n+9):before {
  padding-right: 1em;

}
`

export default RoleList;


