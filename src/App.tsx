import * as React from 'react'
import Profile from './components/Profile'

class App extends React.Component {
  render() {
    return (
      <div>
        <Profile name="Jay" job="developer"/>
      </div>
    )
  }
}

export default App
