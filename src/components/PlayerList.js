import Player from "./Player"


const PlayerList = ({colors, selectedRoles, animation}) => {

    return (
        <>
        {selectedRoles.map((role, index) => (
            <Player key={Math.random()} startX={250} startY={1000} endX={500} endY={700} animation={animation} colors={colors} />
    
          ))
    
        }
          <Player startX={400} startY={1200} endX={500} endY={1000} animation={animation} colors={colors}></Player>
          <Player startX={100} startY={800} endX={500} endY={100} animation={animation} colors={colors}></Player>
          <Player startX={250} startY={1000} endX={500} endY={700} animation={animation} colors={colors}></Player>
          <Player startX={550} startY={1000} endX={500} endY={700} animation={animation} colors={colors}></Player>
          <Player startX={700} startY={800} endX={500} endY={100} animation={animation} colors={colors}></Player>
          <Player startX={550} startY={800} endX={500} endY={300} animation={animation} colors={colors}></Player>
          <Player startX={250} startY={800} endX={500} endY={300} animation={animation} colors={colors}></Player>
          <Player startX={415} startY={600} endX={500} endY={500} animation={animation} colors={colors}></Player>
          <Player startX={415} startY={400} endX={500} endY={100} animation={animation} colors={colors}></Player>
          <Player startX={530} startY={400} endX={500} endY={100} animation={animation} colors={colors}></Player>
          <Player startX={300} startY={400} endX={500} endY={100} animation={animation} colors={colors}></Player>
          </>
    )
    
}

export default PlayerList;