// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timeInMinutes: 0, timeInSeconds: 0}

  getStopWatchTime = () => {
    const {timeInMinutes, timeInSeconds} = this.state

    const totalTimeInSeconds = timeInMinutes * 60 + timeInSeconds

    const minutes = Math.floor(totalTimeInSeconds / 60)
    const seconds = Math.floor(totalTimeInSeconds % 60)

    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  // Start the stop watch

  startTheStopWatch = () => {
    this.timerId = setInterval(this.runClock, 1000)
  }

  runClock = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  // Stop the stop watch

  stopTheStopWatch = () => {
    clearInterval(this.timerId)
  }

  // Reset the stop watch

  resetTheStopWatch = () => {
    clearInterval(this.timerId)
    this.setState({timeInMinutes: 0, timeInSeconds: 0})
  }

  render() {
    return (
      <div className="stop-watch-container">
        <h1>Stopwatch</h1>

        <div className="stop-watch-sub-container">
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>Timer</p>
          </div>

          <h1>{this.getStopWatchTime()}</h1>

          <div className="buttons-container">
            <button
              type="button"
              onClick={this.startTheStopWatch}
              className="start-button"
            >
              Start
            </button>
            <button
              type="button"
              onClick={this.stopTheStopWatch}
              className="stop-button"
            >
              Stop
            </button>
            <button
              type="button"
              onClick={this.resetTheStopWatch}
              className="reset-button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
