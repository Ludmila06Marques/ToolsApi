import { Tools } from "@prisma/client"

export type CreateToolsType= Omit <Tools  , 'id'>