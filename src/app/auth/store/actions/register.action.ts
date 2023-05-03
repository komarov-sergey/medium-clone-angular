import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../actionTypes'

console.log(ActionTypes.REGISTER)

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ username: string; password: string; email: string }>()
)
