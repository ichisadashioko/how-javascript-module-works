import React from 'react'
import { connect } from 'react-redux'

import { SlideState } from '../../store/presentation/types'
import { RootState } from '../../store'
import Code from '../Code'

let slides = [
    (<h1>JavaScript modules</h1>),
    (
        <ul>
            <li>CommonJS</li>
            <li>AMD</li>
        </ul>
    ),
    (
        <div>
            <h2>CommonJS in NodeJS</h2>
            <p>How modules are loaded in NodeJS?</p>
            <p>Why I cannot implicit create global variables in NodeJS?</p>
            <Code inline={false} snippet={`function() {\n    x = 0; // x will become or modify global variable after the function is called.\n}`} />
            <Code inline={false} snippet={`x = 0; // will throw error`} />
        </div>
    ),
    (
        <div>
            <h1>AMD in Dojo</h1>
            <p>How does Dojo (AMD) load JavaScript files that are included in the <Code inline={true} snippet={'<script>'} /> tag?</p>
            <ul>
                <li></li>
            </ul>
        </div>
    ),
    (<div>End</div>),
]

const Slide = (props: SlideState) => {
    let slideIndex = (props.slideIndex < 0) ? 0 : (props.slideIndex >= slides.length) ? slides.length : props.slideIndex
    return slides[slideIndex]
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