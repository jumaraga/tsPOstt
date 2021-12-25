import Link from "next/link"
import React, { ChangeEvent } from "react"
export default function Newtask(){
   const hola= {
      title:'',
      description:''
   }
   interface Task{
      title:string,
      description:string,
   }
   const [state, setState] = React.useState(hola)
   React.useEffect(()=>console.log(process.env.PORT),[])

   const onchange =({target:{name , value}}:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{

      setState({...state,  [name]: value }) 
      console.log(state)
   }
   const createTask=async(task:Task)=>{
      const connection = await fetch('http://localhost:3000/api/tasks',{
         method: 'POST',
         headers:{
            'Content-Type':'application/json'
         },
         body:JSON.stringify(state)
      })
      console.log(connection)
   }
   const handlerSubmit=(e:SubmitEvent)=>{
      e.preventDefault();
      createTask(state)
   }

   return(
      <form action="/api/tasks" onSubmit={handlerSubmit}>
         <input type="text" value={state.title} name="title" onChange={onchange} placeholder="Cual sera el titulo"/>
         <textarea  name="description" value={state.description} onChange={onchange} placeholder="ingrese los detalles"/>
         <div>

         <button>Crear nueva tarea</button>
         
         <Link href='/'>
         <a>cancelar</a>
         </Link>
         </div>
      </form>
   )
}