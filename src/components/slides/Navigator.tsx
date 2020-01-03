import React from 'react'

interface NavigatorProps {
    onClickNext?: Function
    onClickPrevious?: Function
}

export class SlideNavigator extends React.Component<NavigatorProps, {}> {
    render() {
        const { onClickNext, onClickPrevious } = this.props
        return (
            <div>
                <button onClick={() => { if (onClickPrevious) { onClickPrevious() } }}>Previous</button>
                <button onClick={() => { if (onClickNext) { onClickNext() } }}>Next</button>
            </div>
        )
    }
}