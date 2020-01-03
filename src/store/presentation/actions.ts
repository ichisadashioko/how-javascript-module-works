import { ChangeSlideActionTypes, NEXT_SLIDE, PREVIOUS_SLIDE } from './types'

export function goToNextSlide(): ChangeSlideActionTypes {
    return {
        type: NEXT_SLIDE,
    }
}

export function goToPreviousSlide(): ChangeSlideActionTypes {
    return {
        type: PREVIOUS_SLIDE,
    }
}