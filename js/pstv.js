(function () {

  "use strict";


  // Functions that assist with initial variable assignment.
  //

  var getArrayFromNodeList = function(nl) {
    var arr = [];
    var i = 0;
    var len = arr.length = nl.length;
    for (; i < len; i++) {
      arr[i] = nl[i];
    }
    return arr;
  };

  var getOffscreenRightApps = function(apps) {
    var arr = [];
    var i = 8;
    var len = apps.length;

    if (len > i) {
      for (; i < len; i++) {
        arr.push(apps[i]);
      }
    }
    return arr;
  };


  // Vars
  //

  // Document elements, prefixed with $, jQuery-style.
  var $pstv = document.getElementById("pstv");
  var $prototype = document.getElementById("prototype");
  var $mockups = document.getElementById("mockups");
  var $controls = document.getElementById("controls");
  var $clock = document.getElementById("clock");

  // TODO: Maybe push/pop/shift/unshift $apps when moving to represent location.
  var $apps = getArrayFromNodeList(document.getElementsByClassName("app"));
  var $appsOffscreenLeft = []; // None offscreen at start
  var $appsOffscreenRight = getOffscreenRightApps($apps);


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

  // Other pagewide vars
  var isFolderOpen = false;

  function log(m) {
    m = (m !== undefined) ? m : "-----------------"; // If no message, output a line.
    console.log(m);
  }

  function dir(m) {
    m && console.dir(m);
  }


  // Swap an old class out for a new one
  //
  function swapClass(el, oldClass, newClass) {
    el.classList.remove(oldClass);
    el.classList.add(newClass);
  }


  // Show/hide the folder contents if the folder app is currently selected
  //
  function toggleFolder() {
    var $folderCurrent = document.querySelector("#app-ps1-folder.app.current");
    var $appImage;

    //el.classList.contains(appClasses[i]))
    // TODO: if bg is custom, then change the class of the folder so its colors change.

    if ($folderCurrent) {
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


  // Slide a particular app right or left.
  //
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

        if (appClasses[i] === "distant-left" && appClasses[newClassIndex] === "offscreen-left-1") {
          $appsOffscreenLeft.push(el);
        } else if (appClasses[newClassIndex] === "distant-left" && appClasses[i] === "offscreen-left-1") {
          $appsOffscreenLeft.pop();
        }

        if (appClasses[i] === "distant-right-4" && appClasses[newClassIndex] === "offscreen-right-1") {
          $appsOffscreenRight.push(el);
        } else if (appClasses[newClassIndex] === "distant-right-4" && appClasses[i] === "offscreen-right-1") {
          $appsOffscreenRight.pop();
        }

        break;

      }
    }
  }


  // Slide all apps left or right.
  //
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

    log("Offscreen left apps:");
    dir($appsOffscreenLeft);
    log("Offscreen right apps:");
    dir($appsOffscreenRight);
  }


  // Stop showing the static mockup screen and show the interactive prototype instead.
  //
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


  // Stop showing the interactive prototype and show a mockup screen instead.
  //
  function showMockups(bgClass) {
    $pstv.classList.add("border-neutral");
    $prototype.classList.add("invisible");
    $mockups.className = "";
    $mockups.classList.add(bgClass);
  }


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


  // On load, set background images with data-image attributes via JS, since CSS can't do it yet!
  (function addFolderBgImages() {
    var $list = document.querySelectorAll("li[data-image]");
    var i = 0, len = $list.length;
    for (; i < len; i++) {
      $list[i].style.backgroundImage = "url(\"" + $list[i].getAttribute("data-image") + "\")";
    }
  }());


  // On load, starts event listeners for all buttons in the #controls element.
  $controls.addEventListener("click", function (e) {

    var target = e.target || e.srcElement;
    e.preventDefault();

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