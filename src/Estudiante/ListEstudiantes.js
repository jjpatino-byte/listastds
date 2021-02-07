import React, {Component} from 'react'
import axios from 'axios'
import  "./boton.css"

export default class ListEstudiantes extends Component{
    state={
        users:[],
        id_estudiante:'',
        nombre_est:'',
        apellidos_est:'',
        edad:'',
        id_carrera:''
    }
    async componentDidMount(){
        const res = await axios.get('https://liststds.herokuapp.com/');
        this.setState({users:res.data});
    }
    render(){
        const alerta=(msj)=>{
            alert(msj);
          }
        return(
            
            <center>
            
            <table border="1">
                <tbody>
                <tr>
                    <td width="180"><h3 align="center">ID del estudiante</h3></td>
                    <td width="250"><h3 align="center">Nombre del estudiante</h3></td>
                    <td width="200"><h3 align="center">Código de la carrera</h3></td>
                    <td width="80"><h3 align="center">Edad</h3></td>
                </tr>
                <td align="center" bgcolor="E5E5E5">
                    {this.state.users.map( (user)=>(
                        <tr  key={user.nombre_est}>
                            {user.id_estudiante}
                        </tr>

                    )

                    )
                    }
                
                </td> 
                <td bgcolor="FEA87E">
                    {this.state.users.map( (user)=>(
                        <tr key={user.nombre_est}>
                            {user.nombre_est+" "+user.apellidos_est}
                        </tr>

                    )

                    )
                    }
                
                </td> 
                <td align="center" bgcolor="E5E5E5"> 
                    {this.state.users.map( (user)=>(
                        <tr key={user.nombre_est}>
                            {user.id_carrera}
                        </tr>

                    )

                    )
                    }
                
                </td> 
                <td align="center" bgcolor="FEA87E">
                    {this.state.users.map( (user)=>(
                        <tr key={user.nombre_est}>
                            {user.edad}
                        </tr>

                    )

                    )
                    }
                
                </td> 
                </tbody>
            </table>
            
            <br></br>
            <br></br>
            <br></br>
            <div align="center"> 
            <button class="btn" onClick={()=>alerta("Existen "+this.state.users.length+" estudiantes en la lista")}>Cantidad de Estudiantes</button>
            </div>
            </center>
        )
    }
}