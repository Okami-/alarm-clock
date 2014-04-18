(function( window, undefined ){

  setInterval(function updateClock() {
    if (window.addEventListener) {
      window.addEventListener('load', updateClock, false);
    }
    else if (window.attachEvent) {
      window.attachEvent('onload', updateClock);
    }

    var currentTime = new Date(),
        currentHours = currentTime.getHours(),
        currentMinutes = currentTime.getMinutes(),
        currentSeconds = currentTime.getSeconds();
        currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
        currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
        currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
        currentHours = (currentHours == 0) ? 12 : currentHours;
        var timeOfDay = (currentHours < 12) ? "AM" : "PM";
        var currentTimeString = currentHours
                              + ":"
                              + currentMinutes
                              + ":"
                              + currentSeconds
                              + " "
                              + timeOfDay;
    document.getElementById("clock").firstChild.nodeValue = currentTimeString;
  }, 1000);

  var controlPanel = document.getElementById("")

})(window);
