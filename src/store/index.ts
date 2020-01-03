import { combineReducers } from 'redux'
import { slideReducer } from './presentation/reducers'

export const rootReducer = combineReducers({
    presentation: slideReducer,
})

export type RootState = ReturnType<typeof rootReducer>