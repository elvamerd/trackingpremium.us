//import React, { useEffect } from 'react';
import "./aba.css";
import "./body1";
const API_URL = "https://api.spacexdata.com/v3";
export  async function getLaunchByFlighyNumber(flight_number){
    try {
    const Response = await fetch(`${API_URL}/launches/${flight_number}`);
    const data=await Response.json();
    return data;
    } catch (error) {
        console.error(error);
    }
}
