import { SlideState, ChangeSlideActionTypes, NEXT_SLIDE, PREVIOUS_SLIDE } from './types'

import { SLIDES } from '../../components/slides/slideData'

const initialState: SlideState = {
    slideIndex: 0,
}

export function slideReducer(state = initialState, action: ChangeSlideActionTypes): SlideState {
    switch (action.type) {
        case NEXT_SLIDE:
            return {
                slideIndex: (state.slideIndex >= (SLIDES.length - 1)) ? (SLIDES.length - 1) : state.slideIndex + 1,
            }
        case PREVIOUS_SLIDE:
            return {
                slideIndex: (state.slideIndex <= 0) ? 0 : state.slideIndex - 1,
            }
        default:
            return state
    }
}