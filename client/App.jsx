import entity from './Entity.ts'
import * as React from 'react'
import { render } from 'react-dom'

import Comp from './Comp'

Meteor.startup(() => {
  render(
    <Comp/>,
    document.getElementById("react-content")
  )
})