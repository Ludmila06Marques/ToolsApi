import Joi from "joi";
import { CreateToolsType } from "../type/toolsType";

export const toolsSchema = Joi.object<CreateToolsType>({
    title:Joi.string().required(),
    link:Joi.string().uri().required(),
    description:Joi.string().max(256),
    tags: Joi.array().min(0).max(8).required()
})