import React from 'react'

const Code = (props: { snippet: string, inline: boolean }) => {
    if (props.inline) {
        return (<code>{props.snippet}</code>)
    } else {
        return (
            <pre><code>{props.snippet}</code></pre>
        )
    }
}

export default Code