document.addEventListener('DOMContentLoaded', init)

function init() {

  var count = 0;

function timerId() {

    window.setInterval(startButton,1000);

}


  function startButton() {

    document.getElementById("timer").textContent = " Time elapsed: " + count;
    count++;

  }


  document.getElementById("start").addEventListener("click", function() {

    startButton();
    timerId();

  });



  function resetButton() {



    document.getElementById("timer").textContent = "Stop Watch";

    window.clearInterval(timerId);
  }

document.getElementById("reset").addEventListener("click", function() {

     resetButton();
     window.clearInterval(startButton);


});

  function pauseButton() {

    ocument.getElementById("reset").addEventListener("click", function() {


    window.clearInterval(startButton);

  });

}








}

init()
