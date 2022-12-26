import * as toolsRepository from "../repositories/toolsRepository.js"
import { CreateToolsType } from "../type/toolsType.js";
import { failNotFound, failsConflict } from "../utils/errorUtils.js";




export async function getTools(){
    const response= await toolsRepository.getTools()
    if(response.length==0) throw failNotFound("Tools not found");
  
    return response
  }

export async function createTools(tools:CreateToolsType){
  const toolExist = await toolsRepository.getToolByName(tools.title)
  if(toolExist) throw failsConflict('Tool already exist')

  const response= await toolsRepository.createTools(tools)

  return response
}
export async function  deleteTool(id:number) {
  const toolExist= await toolsRepository.getToolById(id)
  
    if(!toolExist) throw failNotFound("Tool not found");

    await toolsRepository.deleteToolById(id)

    const toolExist2= await toolsRepository.getToolById(id)
    if(!toolExist2) return {}
 
  
}