import React from 'react'
import swal from "sweetalert";



export const Boton = () => {
  
    const mostrar =()=>{
     
        swal ({
            title:"Continuar",
            text:"Esta seguro que desea continuar ?",
            icon:'info',
            buttons:["No","Si"],
        }).then(respuesta=>{
            if(respuesta){
                swal({text:"Su empresa es".datos,
                    icon:"success",

                })
                
            }
        }) 
 };

 return(

    <div>
        <button
        className='btn'
        onClick={()=>mostrar()}>Continuar</button>       
    </div>

 )

}

export default Boton