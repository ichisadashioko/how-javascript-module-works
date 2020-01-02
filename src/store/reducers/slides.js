import { Action } from 'redux'
import { SlideActions } from '../actions/slides'

export const slideReducer = (state = 0, action) => {
    switch (action.type) {
        case SlideActions.NEXT_SLIDE:
            return state + 1
        case SlideActions.PREV_SLIDE:
            return state - 1
        default:
            return state
    }
}