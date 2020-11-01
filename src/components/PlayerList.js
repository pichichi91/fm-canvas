import Player from "./Player"


const PlayerList = ({selectedRoles, animation}) => {

    return (
        <>
        {selectedRoles.map((role) => (
            <Player id={role} startX={250} startY={1000} endX={500} endY={700} animation={animation}></Player>
    
          ))
    
          }
          <Player startX={400} startY={1200} endX={500} endY={1000} animation={animation}></Player>
          <Player startX={100} startY={800} endX={500} endY={100} animation={animation}></Player>
          <Player startX={250} startY={1000} endX={500} endY={700} animation={animation}></Player>
          <Player startX={550} startY={1000} endX={500} endY={700} animation={animation}></Player>
          <Player startX={700} startY={800} endX={500} endY={100} animation={animation}></Player>
          <Player startX={550} startY={800} endX={500} endY={300} animation={animation}></Player>
          <Player startX={250} startY={800} endX={500} endY={300} animation={animation}></Player>
          <Player startX={415} startY={600} endX={500} endY={500} animation={animation}></Player>
          <Player startX={415} startY={400} endX={500} endY={100} animation={animation}></Player>
          <Player startX={530} startY={400} endX={500} endY={100} animation={animation}></Player>
          <Player startX={300} startY={400} endX={500} endY={100} animation={animation}></Player>
          </>
    )
    
}

export default PlayerList;