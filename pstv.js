(function () {

  "use strict";

  var $prototype = document.getElementById("prototype");
  var $mockups = document.getElementById("mockups");
  var $controls = document.getElementById("controls");

  // TODO: Maybe push/pop/shift/unshift $apps when moving to represent location.
  var $apps = [
    document.getElementById("app1"),
    document.getElementById("app2"),
    document.getElementById("app3"),
    document.getElementById("app4"),
    document.getElementById("app5"),
    document.getElementById("app6"),
    document.getElementById("app7"),
    document.getElementById("app8"),
    document.getElementById("app9")
  ];

  var appClasses = [
    "offscreen-left-6",
    "offscreen-left-5",
    "offscreen-left-4",
    "offscreen-left-3",
    "offscreen-left-2",
    "offscreen-left-1",
    "distant-left",
    "adjacent-left",
    "current",
    "adjacent-right",
    "distant-right-1",
    "distant-right-2",
    "distant-right-3",
    "distant-right-4",
    "offscreen-right-1",
    "offscreen-right-2",
    "offscreen-right-3"
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

    function moveThisApp(el, direction) {
      var i = 0, len = appClasses.length;

      for (; i < len; i++) {
        if (el.classList.contains(appClasses[i])) {

          if (direction === "right") {
            swapClass(el, appClasses[i], appClasses[i - 1]);
            break;
          }

          else if (direction === "left") {
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


    if (target.id === "move-apps-left") {
      (function () {
        var i = 0, len = $apps.length;
        if (document.querySelector(".adjacent-left")) {
          for (; i < len; i++) {
            moveThisApp($apps[i], "left");
          }
        } else {
          log("Can't move any farther left.");
        }
      }());
    }

    else if (target.id === "move-apps-right") {
      (function () {
        var i = 0, len = $apps.length;
        if (document.querySelector(".adjacent-right")) {
          for (; i < len; i++) {
            moveThisApp($apps[i], "right")
          }
        } else {
          log("Can't move any farther right.");
        }
      }());
    }

    else if (target.id === "hide-grid") {
      showPrototype();
      $prototype.classList.remove("bg-grid");
      $prototype.classList.remove("bg-custom");
    }

    else if (target.id === "show-grid-15") {
      showPrototype();
      $prototype.classList.remove("bg-custom");
      $prototype.classList.add("bg-grid");
    }

    else if (target.id === "show-custom") {
      showPrototype();
      $prototype.classList.remove("bg-grid");
      $prototype.classList.add("bg-custom");
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