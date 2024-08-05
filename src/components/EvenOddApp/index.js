import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  increment = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randomNum}))
  }

  render() {
    const {count} = this.state

    const evenOdd = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container">
        <div className="count-container">
          <h1 className="heading">Count {count}</h1>
          <p className="even-odd">Count is {evenOdd}</p>
          <button type="button" className="btn" onClick={this.increment}>
            Increment
          </button>
          <p className="note">* Increase By random number between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
