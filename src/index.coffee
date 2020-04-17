import React from "react"
import ReactDOM from "react-dom"

import './global.sass'

Hello = (props) => <div>Hello {props.name}!</div>

ReactDOM.render <Hello name="Newbie" />, document.getElementById "app"
