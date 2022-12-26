import { prisma } from "../dbStrategy/db.js";
import { CreateToolsType } from "../type/toolsType.js";

export async function getTools(){
    return prisma.tools.findMany()
}
export async function createTools(tools:CreateToolsType){
    return prisma.tools.create({
        data: {...tools }
      })
}
export async function getToolByName(title:string){
    return prisma.tools.findFirst({where: {title:{
        equals: title,
        mode: 'insensitive',
    }}})
}
export async function getToolById(id:number){
    return prisma.tools.findFirst({where:{id}})
}
export async function deleteToolById(id:number){
    return prisma.tools.delete({where:{id}})
}


