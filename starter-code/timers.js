document.addEventListener('DOMContentLoaded', init)

function init () {
  var startClick = document.getElementById('start')
  var pauseClick = document.getElementById('pause')
  var resetClick = document.getElementById('reset')
  var timerText = document.getElementById('timer')

  var interval = 0;

  var count = 0;



  function timerId () {
    interval = setInterval(updateTime, 1000)
  }


  function pause () {
    clearInterval(interval)
  }

  function updateTime () {
    timerText.textContent = ' Time elapsed: ' + count
    count++
  }

  function resetButton () {
    count = 0
    pause()
    timerText.textContent = 'Stop Watch'
  }

  startClick.addEventListener('click', timerId)

  resetClick.addEventListener('click', resetButton)

  pauseClick.addEventListener('click', pause)
}

init()
