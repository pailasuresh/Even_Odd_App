import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {counter: 0}

  getNumber = () => Math.ceil(Math.random() * 100)

  fun = () => {
    const num = this.getNumber()
    this.setState(prevState => ({
      counter: prevState.counter + num,
    }))
  }

  render() {
    const {counter} = this.state
    const numb = counter % 2 === 0 ? 'even' : 'Odd'
    return (
      <div className="con">
        <div className="main">
          <h1 className="head">
            Count <span className="span">{counter}</span>
          </h1>
          <p className="h">Count is {numb}</p>
          <button type="button" onClick={this.fun}>
            Increment
          </button>
          <p className="p">Increse By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
