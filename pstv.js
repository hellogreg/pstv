(function () {

  "use strict";

  var $controls = document.getElementById("controls");

  var apps = [
    {element: document.getElementById("app1"), position: 1},
    {element: document.getElementById("app2"), position: 2},
    {element: document.getElementById("app3"), position: 3},
    {element: document.getElementById("app4"), position: 4},
    {element: document.getElementById("app5"), position: 5},
    {element: document.getElementById("app6"), position: 6},
    {element: document.getElementById("app7"), position: 7},
    {element: document.getElementById("app8"), position: 8}
  ];

  var appClasses = [
    "app-offscreen-left-5",
    "app-offscreen-left-4",
    "app-offscreen-left-3",
    "app-offscreen-left-2",
    "app-offscreen-left-1",
    "app-distant-left",
    "app-adjacent-left",
    "app-current",
    "app-adjacent-right",
    "app-distant-right-1",
    "app-distant-right-2",
    "app-distant-right-3",
    "app-distant-right-4",
    "app-offscreen-right-1",
    "app-offscreen-right-2"
  ];

  function log(m) {
    m = (m !== undefined) ? m : "-----------------"; // If no message, output a line.
    console.log(m);
  }
/*
  function dir(o) {
    if (o !== undefined) {
      console.dir(o);
    }
  }
*/

  $controls.addEventListener("click", function (e) {


    function swapClass(el, oldClass, newClass) {
      el.classList.remove(oldClass);
      el.classList.add(newClass);
    }

    function shiftThisApp(el, direction) {
      var i = 0, len = appClasses.length;

      for (; i < len; i++) {
        if (el.classList.contains(appClasses[i])) {

          if (direction === "left") {
            swapClass(el, appClasses[i], appClasses[i - 1]);
            break;
          }

          else if (direction === "right") {
            swapClass(el, appClasses[i], appClasses[i + 1]);
            break;
          }
        }
      }
    }


    e.preventDefault();

    //log("Something within \"pstv\" has been clicked.");
    //log("Source element:" + e.srcElement);
    //dir("Source element id:" + e.srcElement.id);


    if (e.srcElement.id === "shift-apps-left") {
      (function () {
        var i = 0, len = apps.length;

        if (document.querySelector(".app-adjacent-right")) {
          for (; i < len; i++) {
            shiftThisApp(apps[i].element, "left")
          }
        } else {
          log("Can't shift any farther left.");
        }
      }());
    }

    else if (e.srcElement.id === "shift-apps-right") {
      (function () {
        var i = 0, len = apps.length;

        if (document.querySelector(".app-adjacent-left")) {
          for (; i < len; i++) {
            shiftThisApp(apps[i].element, "right");
          }
        } else {
          log("Can't shift any farther right.");
        }
      }());
    }

    else if (e.srcElement.id === "hide-grid") {
      document.getElementById("pstv").classList.remove("bg-grid-15");
      document.getElementById("pstv").classList.remove("bg-grid-30");
      document.getElementById("pstv").classList.add("bg-vita");
    }

    else if (e.srcElement.id === "show-grid-15") {
      document.getElementById("pstv").classList.remove("bg-grid-30");
      document.getElementById("pstv").classList.add("bg-grid-15");
    }

    else if (e.srcElement.id === "show-grid-30") {
      document.getElementById("pstv").classList.remove("bg-grid-15");
      document.getElementById("pstv").classList.add("bg-grid-30");
    }

  }, false);

}());