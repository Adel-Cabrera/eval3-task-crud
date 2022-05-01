import Joi from 'joi'
import { CreateTaskDTO, UpdateTaskDTO } from '../dto/TaskDTO'

export const createTaskSchema: Joi.ObjectSchema<CreateTaskDTO> = Joi.object().keys({
  title: Joi.string().required(),
  content: Joi.string(),
  done: Joi.bool()
})

export const updateTaskSchema: Joi.ObjectSchema<UpdateTaskDTO> = Joi.object().keys({
  title: Joi.string().required(),
  content: Joi.string(),
  done: Joi.bool()
  })