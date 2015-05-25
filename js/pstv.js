(function () {

  "use strict";


  // Functions that assist with initial variable assignment.
  //

  var getArrayFromNodeList = function (nl) {
    var arr = [];
    var i = 0;
    var len = arr.length = nl.length;
    for (; i < len; i++) {
      arr[i] = nl[i];
    }
    return arr;
  };

  var getInitialOffscreenLeftApps = function () {
    // No apps begin offscreen left in this version, so return an empty array.
    return [];
  };

  var getInitialOffscreenRightApps = function (apps) {

    var arr = [];
    var i = 8; // 8 is the max number of apps that will fit onscreen.
    var len = apps.length;

    if (len > i) {
      for (; i < len; i++) {
        arr.unshift(apps[i]);
      }
    }
    return arr;
  };


  // Pagewide vars
  //

  // Document elements and element arrays, prefixed with $.
  var $pstv = document.getElementById("pstv");
  var $prototype = document.getElementById("prototype");
  var $mockups = document.getElementById("mockups");
  var $folder = document.getElementById("folder");
  var $controls = document.getElementById("controls");
  var $clock = document.getElementById("clock");
  var $apps = getArrayFromNodeList(document.getElementsByClassName("app"));
  var $appsOffscreenLeft = getInitialOffscreenLeftApps($apps);
  var $appsOffscreenRight = getInitialOffscreenRightApps($apps);

  var appClasses = [
    "offscreen-left",
    "farthest-left",
    "adjacent-left",
    "current",
    "adjacent-right",
    "distant-right-1",
    "distant-right-2",
    "distant-right-3",
    "farthest-right",
    "offscreen-right"
  ];


  // Other pagewide vars
  var isFolderOpen = false;


  // Console functions: log() and dir().
  function log(m) {
    m = (m !== undefined) ? m : "-----------------"; // If no message, output a separator line.
    console.log(m);
  }

  log("log() ready.");

  function dir(m) {
    m && console.dir(m);
  }

  dir({"status": "dir() ready."});


  //
  // Page-wide, non-self-executing helper functions
  //


  // Swap an old class out for a new one
  function swapClass(el, oldClass, newClass) {
    el.classList.remove(oldClass);
    el.classList.add(newClass);
  }


  // Expand or contract the folder contents if the folder app is currently selected
  function toggleFolder() {

    var $selectedFolderApp = document.querySelector("#app-ps1-folder.app.current");

    var $appImage;

    if ($selectedFolderApp) {
      $appImage = $selectedFolderApp.querySelector("header img");
      isFolderOpen = !isFolderOpen;
      document.getElementById("overlay").classList.toggle("show");
      $folder.classList.toggle("shrink");

      if ($appImage.src.indexOf("images/app_folder.png") != -1) {
        $appImage.src = "images/app_folder_empty.png";
      } else {
        $appImage.src = "images/app_folder.png";
      }

      $selectedFolderApp.querySelector("nav").classList.toggle("hide");
      $selectedFolderApp.querySelector("footer").classList.toggle("hide");
    }
  }


  // Slide a particular app right or left. Includes apps sliding offscreen or back onscreen
  function moveThisApp(el, direction, nearestOffLeftAppId, nearestOffRightAppId) {

    var i = 1, len = appClasses.length - 1;
    var newClassIndex;


    if (el.classList.contains("offscreen-left")
        && (nearestOffLeftAppId === el.id)
        && (direction === "left")) {

      // Redisplay this .offscreen-left app.
      $appsOffscreenLeft.pop();
      swapClass(el, "offscreen-left", "farthest-left");


    } else if (el.classList.contains("offscreen-right")
        && (nearestOffRightAppId === el.id)
        && (direction === "right")) {

      // Redisplay this .offscreen-right app.
      $appsOffscreenRight.pop();
      swapClass(el, "offscreen-right", "farthest-right");

    } else {
      for (; i < len; i++) {
        if (el.classList.contains(appClasses[i])) {
          newClassIndex = i;
          if (direction === "right") {
            newClassIndex--;
          } else if (direction === "left") {
            newClassIndex++;
          }

          swapClass(el, appClasses[i], appClasses[newClassIndex]);

          if (appClasses[i] === "farthest-left"
              && appClasses[newClassIndex] === "offscreen-left") {
            $appsOffscreenLeft.push(el);
          } else if (appClasses[i] === "farthest-right"
              && appClasses[newClassIndex] === "offscreen-right") {
            $appsOffscreenRight.push(el);
          }

          break;
        }
      }
    }
  }


  // Slide all apps left or right.
  function moveAllApps(direction) {

    var i = 0, len = $apps.length;
    var adjacentClass = direction ? ".adjacent-" + direction : null;
    var offLeftLen = $appsOffscreenLeft.length;
    var nearestOffLeftAppId = (offLeftLen > 0) ? $appsOffscreenLeft[offLeftLen - 1].id : null;
    var offRightLen = $appsOffscreenRight.length;
    var nearestOffRightAppId = (offRightLen > 0) ? $appsOffscreenRight[offRightLen - 1].id : null;

    // If we can move this direction, then do so.
    if ((adjacentClass) && (document.querySelector(adjacentClass))) {

      // If a folder is open, close it before moving apps.
      (isFolderOpen) && toggleFolder();

      // Move each app.
      for (; i < len; i++) {
        moveThisApp($apps[i], direction, nearestOffLeftAppId, nearestOffRightAppId);
      }

      // Disable the folder expand/contract button, unless the folder app is the currently selected one.
      document.getElementById("toggle-folder").disabled = !(document.querySelector("#app-ps1-folder.app.current"));
    }
  }


  // Stop showing the static mockup screen and show the interactive prototype instead.
  function showPrototype(bgClass) {
    if (bgClass != "bg-custom") {
      $pstv.classList.remove("border-neutral");
      $folder.classList.remove("bg-neutral");
    } else {
      $pstv.classList.add("border-neutral");
      $folder.classList.add("bg-neutral");
    }
    $mockups.classList.add("invisible");
    $prototype.className = "";
    $prototype.classList.add(bgClass);
  }


  // Stop showing the interactive prototype and show a mockup screen instead.
  function showMockups(bgClass) {
    $pstv.classList.add("border-neutral");
    $prototype.classList.add("invisible");
    $mockups.className = "";
    $mockups.classList.add(bgClass);
  }


  //
  // Self-executing init functions.
  //

  // On load, update PSTV clock every five seconds.
  (function updateClock() {

    var d, hour, minute, ampm, date, month, year, formattedDate;

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

    setTimeout(function () {
      updateClock();
    }, 5000);
  }());


  // On load, set folder background images with data-image attributes via JS, since CSS can't do it yet!
  (function addFolderBgImages() {
    var $list = document.querySelectorAll("li[data-image]");
    var i = 0, len = $list.length;
    for (; i < len; i++) {
      $list[i].style.backgroundImage = "url(\"" + $list[i].getAttribute("data-image") + "\")";
    }

    $folder.addEventListener("mouseover", function (e) {
      var $defaultFolderApp = $folder.querySelector(".selected");
      var target = e.target || e.srcElement;
      e.preventDefault();
      if ($defaultFolderApp && target.classList.contains("folder-app")) {
        $defaultFolderApp.classList.remove("selected");
        target.classList.add("selected");
      }
    });

  }());


  // On load, starts event listeners for all buttons in the #controls element.
  $controls.addEventListener("click", function (e) {

    var target = e.target || e.srcElement;
    e.preventDefault();

    log("\"" + target.id + "\" pressed.");

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