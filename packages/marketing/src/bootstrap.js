import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    )
}

const devRoot = document.querySelector("#_marketing_micro-dev-root")
if(devRoot){
    mount(devRoot)
}

export { mount }