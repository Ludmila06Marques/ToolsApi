


import { NextFunction, Request, Response } from "express";
import * as toolsSchema from "../schemas/toolsSchema.js"
import { failSchema } from "../utils/errorUtils.js";




export function validateTools(req : Request, res:Response, next:NextFunction) {
    const tools = req.body
    const validation = toolsSchema.toolsSchema.validate(tools)
    if (validation.error) {
      throw failSchema('Wrong schema')
    }
  
    next()
  }