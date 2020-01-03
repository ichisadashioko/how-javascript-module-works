import React from 'react'

import './navigator.css'

interface NavigatorProps {
    onClickNext?: Function
    onClickPrevious?: Function
}

export class SlideNavigator extends React.Component<NavigatorProps, {}> {
    render() {
        const { onClickNext, onClickPrevious } = this.props
        return (
            <div className='slide-navigator'>
                <button className='left' onClick={() => { if (onClickPrevious) { onClickPrevious() } }}>Previous</button>
                <button className='right' onClick={() => { if (onClickNext) { onClickNext() } }}>Next</button>
            </div>
        )
    }
}