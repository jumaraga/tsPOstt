import { NextApiRequest, NextApiResponse } from "next";

export default function(req:NextApiRequest, res:NextApiResponse){
   const {method}= req;
   switch(method){
      case 'GET':
         return res.send('asdas')
         break;
   }
}