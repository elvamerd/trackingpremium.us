import * as API from "./services/launches";
import {useState, useEffect} from "react";
import Boton from "./Boton";
import {Box, Heading} from "@chakra-ui/react"
import Radio from "./2";


export function App (){
const [launches, setLaunches]=useState([]);

useEffect(( )=>{
  API.getAllLaunches().then(setLaunches);
}, [])


  return(

    <>
    
    <div>
    
    <section>
    <Heading>SpaceX</Heading>
    {launches.map((launch)=>(
      <Box  key={launch.flight_number} bg="gray.100" p={4} m={4}> 
      {launch.mission_name}({launch.launch_year})
      <Boton/>
      <Radio/>
     </Box>
    ))}
    </section>
    </div>
    
    </>
  )

}

export default App
