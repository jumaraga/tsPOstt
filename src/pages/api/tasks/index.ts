import { NextApiRequest, NextApiResponse } from "next";
import { title } from "process";
import { Sticky } from "semantic-ui-react";
import { conn } from "src/utils/db";

export default async function hola(req:NextApiRequest,res:NextApiResponse){
   const {method,body}= req
   let response:any; 
   switch(method){
      case'GET':
         response = await conn.query('select * from task')
         return  res.json(response);
      case 'POST':
         try{
            const {title,description} = body
            console.log(typeof title)
            response = await conn.query("insert into tasks(title,description) values($1,$2) returning *",[title,description]);
            console.log(typeof response.rows[0])
            return res.json({msg: response})
         }catch(e){
            console.log(e)
               return res.send('hola')
         }
         
   }
   
}