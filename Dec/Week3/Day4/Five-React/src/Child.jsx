import React, {useContext} from 'react'
import {nameContext, themeContext} from './App'

function Child() {
    let value = useContext(nameContext);
    let theme = useContext(themeContext);
  return (
    <div>
        this is child

    <br />
    value {value}
    <br />
    theme : {theme}
    </div>
  )
}

export default Child