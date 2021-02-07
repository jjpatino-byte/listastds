//import  "./boton.css"
import Header from "./Header.js"
import ListEstudiantes from "./ListEstudiantes"
import React from 'react'





const EstudianteLayout = () => {
   
    return (
        
        
        
        <React.Fragment>
        
        <Header title="Listado de Estudiantes"/>

        <ListEstudiantes/>
        
        
        </React.Fragment>
    )

    
}

export default EstudianteLayout