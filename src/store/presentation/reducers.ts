import { SlideState, ChangeSlideActionTypes, NEXT_SLIDE, PREVIOUS_SLIDE } from './types'

const initialState: SlideState = {
    slideIndex: 0,
}

export function slideReducer(state = initialState, action: ChangeSlideActionTypes): SlideState {
    switch (action.type) {
        case NEXT_SLIDE:
            return {
                slideIndex: state.slideIndex + 1,
            }
        case PREVIOUS_SLIDE:
            return {
                slideIndex: state.slideIndex - 1,
            }
        default:
            return state
    }
}