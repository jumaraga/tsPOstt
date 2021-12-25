import { Card ,Button, Grid } from "semantic-ui-react"
/* import {TaskCard} from "src/utils/TaskCard" */
export default function App(props:any){
  console.log(`sadas`)
  return(
    <>
    <h1>jola  </h1>
    </>
  )
}

export  async function getServerSideProps(){
  /* const res = await fetch('http://localhost:3000/api/tasks')
  const data = await res.json() */
  return{
    props:{
      data:'adsasd'
    }
  }
}