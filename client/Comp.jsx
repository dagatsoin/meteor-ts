import * as React from 'react'

import { observable } from 'mobx'
import { observer } from 'mobx-react'

@observer
class Comp extends React.Component {

  @observable
  foo = {
    bar: 'bbb'
  }

  render() {
    return <div>{this.foo.bar}</div>
  }
}

export default Comp;