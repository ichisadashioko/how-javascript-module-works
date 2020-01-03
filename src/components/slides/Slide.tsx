import React from 'react'
import { connect } from 'react-redux'

import { SlideState } from '../../store/presentation/types'
import { RootState } from '../../store'
import { SLIDES } from './slideData'

const Slide = (props: SlideState) => {
    let slideIndex = (props.slideIndex < 0) ? 0 : (props.slideIndex >= SLIDES.length) ? SLIDES.length : props.slideIndex
    return (
        <div>
            <div>{SLIDES[slideIndex]}</div>
        </div>
    )
}

const mapStateToProps = (state: RootState): SlideState => {
    // console.log(state)
    return {
        slideIndex: state.presentation.slideIndex,
    }
}

export default connect(
    mapStateToProps,
)(Slide)