(function () {

  "use strict";

  var $controls = document.getElementById("controls");

  function log(m) {
    m = (m !== undefined) ? m : "-----------------"; // If no message, output a line.
    console.log(m);
  }

  function dir(o) {
    if (o !== undefined) {
      console.dir(o);
    }
  }

  $controls.addEventListener("click", function (e) {

    e.preventDefault();
    log("Something within \"pstv\" has been clicked.");
    log("Source element:" + e.srcElement);
    dir("Source element id:" + e.srcElement.id);
    //log(document.querySelector(".app-current").id);
    //log(document.querySelector(".app-current").dataset["game"]);

    if (e.srcElement.id === "hide-grid") {
      document.getElementById("pstv").classList.remove("bg-grid-15");
      document.getElementById("pstv").classList.remove("bg-grid-30");
    }

    if (e.srcElement.id === "show-grid-15") {
      document.getElementById("pstv").classList.remove("bg-grid-30");
      document.getElementById("pstv").classList.add("bg-grid-15");
    }

    if (e.srcElement.id === "show-grid-30") {
      document.getElementById("pstv").classList.remove("bg-grid-15");
      document.getElementById("pstv").classList.add("bg-grid-30");
    }

  }, false);

}());