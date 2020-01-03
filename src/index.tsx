import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { rootReducer } from './store'
import Slide from './components/slides/Slide'
import { SlideNavigator } from './components/slides/Navigator'
import { NEXT_SLIDE, PREVIOUS_SLIDE } from './store/presentation/types'

const store = createStore(rootReducer)

render(
    <Provider store={store}>
        {/* <Slide slideIndex={store.getState().presentation.slideIndex} /> */}
        <Slide />
        <SlideNavigator
            onClickNext={() => store.dispatch({ type: NEXT_SLIDE })}
            onClickPrevious={() => store.dispatch({ type: PREVIOUS_SLIDE })}
        />
    </Provider>,
    document.getElementById('root'),
)