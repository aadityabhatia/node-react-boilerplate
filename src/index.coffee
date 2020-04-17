import React from "react"
import ReactDOM from "react-dom"

import './global.sass'

Hello = => <div>Hello React!</div>

ReactDOM.render <Hello />, document.getElementById "app"
