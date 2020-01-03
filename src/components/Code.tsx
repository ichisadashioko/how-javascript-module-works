import React from 'react'
import hljs from 'highlight.js'

function renderHtml(html: string) {
    return {
        __html: html,
    }
}

const Code = (props: { snippet: string, inline: boolean, language?: string }) => {
    if (props.inline) {
        return (<code>{props.snippet}</code>)
    } else {
        if (props.language) {
            return <pre dangerouslySetInnerHTML={renderHtml(hljs.highlight(props.language, props.snippet).value)} />
        }
        return (
            <pre dangerouslySetInnerHTML={renderHtml(hljs.highlightAuto(props.snippet).value)} />
        )
    }
}

export default Code