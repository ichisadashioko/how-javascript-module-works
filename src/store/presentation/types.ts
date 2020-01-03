export interface SlideState {
    slideIndex: number
}

export const NEXT_SLIDE = 'NEXT_SLIDE'
export const PREVIOUS_SLIDE = 'PREVIOUS_SLIDE'

interface NextSlideAction {
    type: typeof NEXT_SLIDE
}

interface PreviousSlideAction {
    type: typeof PREVIOUS_SLIDE
}

export type ChangeSlideActionTypes = NextSlideAction | PreviousSlideAction