import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'

import { rootReducer } from './store'
import Slide from './components/slides/Slide'
import { SlideNavigator } from './components/slides/Navigator'
import { NEXT_SLIDE, PREVIOUS_SLIDE } from './store/presentation/types'
import DevTools from './containers/DevTools'

const enhancer = compose(
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument(),
)

const store = createStore(rootReducer, enhancer)

render(
    <Provider store={store}>
        <Slide />
        <SlideNavigator
            onClickNext={() => store.dispatch({ type: NEXT_SLIDE })}
            onClickPrevious={() => store.dispatch({ type: PREVIOUS_SLIDE })}
        />
        <DevTools />
    </Provider>,
    document.getElementById('root'),
)