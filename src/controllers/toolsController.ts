import { Request , Response } from "express"
import * as toolsService from "../services/toolsService.js"




export async function getTools(req:Request ,res:Response){
  
    const response = await toolsService.getTools();
    res.status(200).send(response);
  }
  

  export async function createTools(req:Request ,res:Response){
    const tools= req.body
    const response = await toolsService.createTools(tools);
    res.status(201).send(response);
  }
  
  export async function deleteTool(req:Request ,res:Response){
    const id:number= parseInt(req.params.id)
    if (isNaN(id)) {
      return res.sendStatus(400)
    }
    const result = await toolsService.deleteTool(id)
    res.status(200).send(result);
  
  }
  
  