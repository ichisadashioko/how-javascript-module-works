import { SlideState, ChangeSlideActionTypes, NEXT_SLIDE, PREVIOUS_SLIDE } from './types'

const initialState: SlideState = {
    index: 0,
}

export function slideReducer(state = initialState, action: ChangeSlideActionTypes): SlideState {
    switch (action.type) {
        case NEXT_SLIDE:
            return {
                index: state.index + 1,
            }
        case PREVIOUS_SLIDE:
            return {
                index: state.index - 1,
            }
        default:
            return state
    }
}