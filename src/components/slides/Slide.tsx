import React from 'react'
import { connect } from 'react-redux'

import { SlideState } from '../../store/presentation/types'
import { RootState } from '../../store'

const Slide = (props: SlideState) => {
    // console.log(props)
    switch (props.slideIndex) {
        case 0:
            return (
                <h1>JavaScript modules</h1>
            )
        case 1:
            return (
                <ul>
                    <li>CommonJS</li>
                    <li>AMD</li>
                </ul>
            )
        default:
            return (
                <div>End</div>
            )
    }
}

const mapStateToProps = (state: RootState): SlideState => {
    // console.log(state)
    return {
        slideIndex: state.presentation.slideIndex,
    }
}
const mapDispatchToProps = {

}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Slide)