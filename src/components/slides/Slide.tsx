import React from 'react'
import { connect } from 'react-redux'

import { SlideState } from '../../store/presentation/types'
import { RootState } from '../../store'
import Code from '../Code'
import { nodeJsImportPseudoCode, dojoDefine, dojoDefineExample, dojoRequire, dojoRequireExample } from './codeSnippets'

// @ts-ignore
import JS_DEPS_GRAPH from '../../../images/madge.svg'


let slides = [
    (
        <div>
            <h1>JavaScript modules</h1>
            <ul>
                <li>CommonJS</li>
                <li>AMD</li>
            </ul>
        </div>
    ),
    (
        <div>
            <h1>CommonJS in NodeJS</h1>
            <h3>Questions</h3>
            <ul>
                <li>How modules are loaded in NodeJS?
                    <ul>
                        <li><code>REPL</code> - read-eval-print loop</li>
                        <li><img src={JS_DEPS_GRAPH} /></li>
                        <li><Code inline={false} snippet={nodeJsImportPseudoCode} /></li>
                    </ul>
                </li>
                <li>Why I cannot implicit create global variables in NodeJS?
                    <ul>
                        <li>In browser
                        <Code inline={false} snippet={`function() {\n    x = 0; // x will become or modify global variable after the function is called.\n}`} />
                        </li>
                        <li>In NodeJS
                        <Code inline={false} snippet={`x = 0; // will throw error`} />
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    ),
    (
        <div>
            <h1>AMD in Dojo</h1>
            <h3>Questions</h3>
            <ul>
                <li>How does Dojo (AMD) load JavaScript files that are included in the <Code inline={true} snippet={'<script>'} /> tag?
                    <ul>
                        <li>Dojo resolves the module path base on some configuration.
                            <ul>
                                <li>Dojo modules hierarchy</li>
                                <li>Base URL of <code>dojo.js</code></li>
                            </ul>
                        </li>
                        <li>Inject the module file path via <Code inline={true} snippet={`<script>`} /> tag into the document and execute callback on finish loading.</li>
                    </ul>
                </li>
                <li>Asynchronous modules loading - How module loading is synchronized?
                    <ul>
                        <li>When we start to request a module, we start a new async method and pass the callback.</li>
                        <li>After a module is loaded, the callback will check for all dependencies have been loaded. If true then execute the callback code, otherwise return.</li>
                        <li>The last arrived module will execute the callback code. Whether it is define a new module or run some code that requires some modules.</li>
                    </ul>
                </li>
            </ul>
        </div>
    ),
    (
        <div>
            <h1>Define module in Dojo (AMD)</h1>
            <h3><code>define</code> is the function for defining AMD module.</h3>
            <hr />
            <h3>Definition of <code>define</code> function in Dojo</h3>
            <Code inline={false} snippet={dojoDefine} language={'javascript'} />
            <hr />
            <h3>Example</h3>
            <Code inline={false} snippet={dojoDefineExample} language={'javascript'} />
        </div>
    ),
    (
        <div>
            <h1>Require module in Dojo (AMD)</h1>
            <h3><code>require</code> is the function for running code with dependencies.</h3>
            <hr />
            <h3>Definition of <code>require</code> function in Dojo</h3>
            <Code inline={false} snippet={dojoRequire} language={'javascript'} />
            <hr />
            <h3>Example</h3>
            <Code inline={false} snippet={dojoRequireExample} language={'javascript'} />
        </div>
    ),
    (
        <div>
            <h1>ESM (ECMAScript Modules)</h1>
            <hr />
            <p>This is the native JavaScript module specification in ES6.</p>
            <hr />
            <h3>Demo</h3>
            <hr />
            <h3>References</h3>
            <ul>
                <li><a href="https://hacks.mozilla.org/2015/08/es6-in-depth-modules/">ES6 In Depth: Modules</a></li>
                <li><a href="https://github.com/mdn/js-examples/tree/ee35745f57c9768106ff7f4b21200abf6702ca94/modules/basic-modules">Basic website using ESM</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules">MDN guide on ESM</a></li>
            </ul>
        </div>
    ),
    (
        <div>
            <h1>Bundler (webpack, parcel, etc.)</h1>
            <hr />
            <ul>
                <li>They run on NodeJS runtime.</li>
                <li>They load dependencies using NodeJS.</li>
                <li>They use Babel (and may be other libraries) to transpile JavaScript compatible with a specific JavaScript specification (ES3, ES6, etc.) and runtime (browser, NodeJS, etc.).</li>
                <li>They have their own module system implemented inside the bundled file when bundled for browser use.
                    <ul>
                        <li>Webpack</li>
                        <li>Parcel</li>
                    </ul>
                </li>
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

export default connect(
    mapStateToProps,
)(Slide)