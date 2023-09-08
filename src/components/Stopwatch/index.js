// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0}

  IncrementTime = () => {
    this.setState(prevState => {
      const {seconds, minutes} = prevState
      if (seconds === 59) {
        return {seconds: 0, minutes: minutes + 1}
      }
      return {seconds: seconds + 1}
    })
  }

  startTimerBtn = () => {
    this.timerId = setInterval(this.IncrementTime, 1000)
  }

  pauseTimerBtn = () => {
    clearInterval(this.timerId)
  }

  resetTimerBtn = () => {
    clearInterval(this.timerId)
    this.setState({minutes: 0, seconds: 0})
  }

  render() {
    const {minutes, seconds} = this.state
    const displayMinutes = minutes > 9 ? minutes : `0${minutes}`
    const displaySeconds = seconds > 9 ? seconds : `0${seconds}`
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="stop-watch-main-head">Stopwatch</h1>
          <div className="timer-card">
            <div className="timer-head">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="clock-img"
              />
              <p className="timer-name">Timer</p>
            </div>
            <h1 className="timer-para">
              {displayMinutes}:{displaySeconds}
            </h1>
            <div>
              <button
                type="button"
                className="btn1"
                onClick={this.startTimerBtn}
              >
                Start
              </button>
              <button
                type="button"
                className="btn2"
                onClick={this.pauseTimerBtn}
              >
                Stop
              </button>
              <button
                type="button"
                className="btn3"
                onClick={this.resetTimerBtn}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
