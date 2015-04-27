(function () {

  "use strict";

  var $prototype = document.getElementById("prototype");
  var $mockups = document.getElementById("mockups");
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

    var target = e.target || e.srcElement;
    e.preventDefault();
    //log("Something within \"pstv\" has been clicked.");
    //log("Source target:" + target);
    //dir("Source target id:" + target.id);

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

    function showPrototype() {
      $mockups.classList.remove("visible");
      $mockups.classList.add("invisible");
      $prototype.classList.remove("invisible");
      $prototype.classList.add("visible");
    }

    function showMockups() {
      $prototype.classList.remove("visible");
      $prototype.classList.add("invisible");
      $mockups.className = "";
    }


    if (target.id === "shift-apps-left") {
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

    else if (target.id === "shift-apps-right") {
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

    else if (target.id === "hide-grid") {
      showPrototype();
      $prototype.classList.remove("bg-grid-15");
      $prototype.classList.remove("bg-grid-30");
    }

    else if (target.id === "show-grid-15") {
      showPrototype();
      $prototype.classList.remove("bg-grid-30");
      $prototype.classList.add("bg-grid-15");
    }

    else if (target.id === "show-grid-30") {
      showPrototype();
      $prototype.classList.remove("bg-grid-15");
      $prototype.classList.add("bg-grid-30");
    }

    else if (target.id === "show-vita") {
      showMockups();
      $mockups.classList.add("bg-vita");
    }

    else if (target.id === "show-xeno-scanlines") {
      showMockups();
      $mockups.classList.add("bg-xeno-scanlines");
    }

    else if (target.id === "show-xeno-smooth") {
      showMockups();
      $mockups.classList.add("bg-xeno-smooth");
    }

    else if (target.id === "show-ridge-scanlines") {
      showMockups();
      $mockups.classList.add("bg-ridge-scanlines");
    }

    else if (target.id === "show-ridge-smooth") {
      showMockups();
      $mockups.classList.add("bg-ridge-smooth");
    }

  }, false);

}());
