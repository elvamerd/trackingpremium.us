const API_URL = "https://api.spacexdata.com/v3";

export async function getAllLaunches(){
    try{
    const Response = await fetch(`${API_URL}/launches`);
    const data=await Response.json();
    return data;
} catch(error){
    console.error(error);
}
}

export async function getLaunchByFlighyNumber(flight_number){
    try {
    const Response = await fetch(`${API_URL}/luanches/${flight_number}`);
    const data=await Response.json();
    return data;
    } catch (error) {
        console.error(error);
    }
}

