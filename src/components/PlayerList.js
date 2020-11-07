import Player from "./Player"


const PlayerList = ({colors, selectedRoles, animation}) => {

    return (
        <>
        {selectedRoles.map((role, index) => (
            <Player key={Math.random()} startX={role.startX} startY={role.startY} endX={role.endX} endY={role.endY} animation={animation} colors={colors} />
    
          ))
    
        }
         
          </>
    )
    
}

export default PlayerList;