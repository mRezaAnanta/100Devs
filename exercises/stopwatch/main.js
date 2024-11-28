function StopWatch() {
  let startTime, endTime, running, duration = 0
  this.start = function () {
    if (running)
      // throw new Error('StopWatch has already started!')
      return console.log("StopWatch has already started!")
    running = true
    startTime = new Date()
  }
  this.stop = function () {
    if (!running)
      // throw new Error('StopWatch has already stoped!')
      return console.log("StopWatch has already stoped!")
    running = false
    endTime = new Date()
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000
    duration += seconds
  }
  this.reset = function () {
    startTime = null
    endTime = null
    running = false
    duration = 0
  }
  Object.defineProperty(this, 'duration', {
    get: function () { return duration }
  })
}
