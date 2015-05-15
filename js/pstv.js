(function () {

  "use strict";

  // Document elements, prefixed with $, jQuery-style.
  var $pstv = document.getElementById("pstv");
  var $prototype = document.getElementById("prototype");
  var $mockups = document.getElementById("mockups");
  var $controls = document.getElementById("controls");
  var $clock = document.getElementById("clock");

  // Other pagewide vars
  var isFolderOpen = false;


  // TODO: Maybe push/pop/shift/unshift $apps when moving to represent location.
  var $apps = [
    document.getElementById("app1"),
    document.getElementById("app2"),
    document.getElementById("app3"),
    document.getElementById("app4"),
    document.getElementById("app5"),
    document.getElementById("app-ps1-folder"),
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

  // After page load, update PSTV clock every five seconds.
  (function updateClock() {
    var d, hour, minute, ampm, date, month, year, formattedDate, timer;
    d = new Date();
    month = d.getMonth() + 1;
    date = d.getDate();
    year = d.getFullYear().toString().slice(-2);
    hour = d.getHours();
    minute = d.getMinutes();
    minute = minute < 10 ? "0" + minute : minute;
    ampm = hour < 12 ? "AM" : "PM";
    hour = hour > 12 ? hour - 12 : hour;
    hour = hour === 0 ? 12 : hour;
    formattedDate = month + "/" + date + "/" + year + " " + hour + ":" + minute + " " + ampm;
    $clock.innerHTML = formattedDate;
    //noinspection JSUnusedAssignment
    timer = setTimeout(function () {
      updateClock();
    }, 5000);
  }());


  // Set background images with data-image attributes via JS, since CSS can't do it, yet!
  (function addFolderBgImages() {
    var $list = document.querySelectorAll("li[data-image]");
    var i = 0, len = $list.length;
    for (; i < len; i++) {
      $list[i].style.backgroundImage = "url(\"" + $list[i].getAttribute("data-image") + "\")";
    }
  }());


  // Event listeners for all buttons in the #controls element.
  $controls.addEventListener("click", function (e) {

    var target = e.target || e.srcElement;
    e.preventDefault();

    function toggleFolder() {
      var $folderCurrent = document.querySelector("#app-ps1-folder.app.current");
      var $appImage;

      // Do everything below only if the folder app is currently selected
      if ($folderCurrent) {

        // Toggle isFolderOpen var
        isFolderOpen = !isFolderOpen;

        $appImage = $folderCurrent.querySelector("header img");
        document.getElementById("overlay").classList.toggle("show");
        document.getElementById("folder").classList.toggle("shrink");
        if ($appImage.src.indexOf("images/app_folder.png") != -1) {
          $appImage.src = "images/app_folder_empty.png";
        } else {
          $appImage.src = "images/app_folder.png";
        }
        $folderCurrent.querySelector("nav").classList.toggle("hide");
        $folderCurrent.querySelector("footer").classList.toggle("hide");
      }
    }

    function swapClass(el, oldClass, newClass) {
      el.classList.remove(oldClass);
      el.classList.add(newClass);
    }

    function moveThisApp(el, direction) {
      var i = 0, len = appClasses.length;
      var newClassIndex;

      for (; i < len; i++) {
        if (el.classList.contains(appClasses[i])) {
          newClassIndex = i;
          if (direction === "right") {
            newClassIndex--;
          } else if (direction === "left") {
            newClassIndex++;
          }
          // If a folder is open, close it when moving apps.
          (isFolderOpen) && toggleFolder();
          swapClass(el, appClasses[i], appClasses[newClassIndex]);
          break;

        }
      }
    }

    function moveAllApps(direction) {
      var i = 0, len = $apps.length;
      var adjacentClass = direction ? ".adjacent-" + direction : null;

      if (adjacentClass) {
        if (document.querySelector(adjacentClass)) {
          for (; i < len; i++) {
            moveThisApp($apps[i], direction);
          }
        } else {
          log("Can't move any farther " + direction + ".");
        }
      }
    }

    function showPrototype(bgClass) {
      if (bgClass != "bg-custom") {
        $pstv.classList.remove("border-neutral");
      } else {
        $pstv.classList.add("border-neutral");
      }
      $mockups.classList.add("invisible");
      $prototype.className = "";
      $prototype.classList.add(bgClass);
    }

    function showMockups(bgClass) {
      $pstv.classList.add("border-neutral");
      $prototype.classList.add("invisible");
      $mockups.className = "";
      $mockups.classList.add(bgClass);
    }


    switch (target.id) {

      case "move-apps-left":
        moveAllApps("left");
        break;

      case "move-apps-right":
        moveAllApps("right");
        break;

      case "toggle-folder":
        toggleFolder();
        break;

      case "toggle-marquee":
        document.getElementById("announcements").classList.toggle("marquee");
        break;

      case "hide-grid":
        showPrototype("bg-nogrid");
        break;

      case "show-grid-15":
        showPrototype("bg-grid");
        break;

      case "show-custom":
        showPrototype("bg-custom");
        break;

      case "show-vita":
        showMockups("bg-vita");
        break;

      case "show-xeno-scanlines":
        showMockups("bg-xeno-scanlines");
        break;

      case "show-xeno-smooth":
        showMockups("bg-xeno-smooth");
        break;

      case "show-ridge-scanlines":
        showMockups("bg-ridge-scanlines");
        break;

      case "show-ridge-smooth":
        showMockups("bg-ridge-smooth");
        break;

      default:
        log("The clicked target doesn't have any currently associated actions.");

    }

  }, false);

}());