import "./body1";
import "../Body";
import React, { useEffect, useState } from 'react';

export default function API(){
  const [launches,setname]=useState(0);

useEffect(()=>{
  API.getAllLaunches().then(setname);
},[]);

return(
<>
<h1>Empresas</h1>
<ul>
{launches.map((launches)=>
  <li key={launches.flight_number}>
  {launches.mission_name} (launches.launch_year)
  </li>
  )}
</ul>
</>
)
}