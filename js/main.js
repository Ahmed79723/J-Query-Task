/// <reference types="../@types/jquery" />
// ?==========================================================|Global Vars|======================================================
let width = $("#nav").width();
// &====================================================|JQ Functions for home|==================================================
$("#nav-close").on("click", function () {
  $("#nav").animate({ left: -width }, 500);
  $(".headline").animate({ marginLeft: "0" }, 500);
});
$("#open").on("click", function () {
  $("#nav").animate({ left: "0" }, 500);
  $(".headline").animate({ marginLeft: width }, 500);
});
// &====================================================|JQ Functions for Scroll|==================================================
$("nav a").on("click", function () {
  let currentHref = $(this).attr("href");
  let currentOffset = $(currentHref).offset().top;
  console.log(currentOffset);
  $("html,body").animate({ scrollTop: currentOffset }, 2000);
});

// &====================================================|JQ Functions for Details|==================================================
$("h3").on("click", function (e) {
  let except = $(e.target).next();
  $(e.target).next().slideToggle(500);
  $(".singer p").not(except).slideUp(500);
});
// &====================================================|JQ Functions for Contact|==================================================
$("#message").on("input", function () {
  let range = $("#message").val().length;
  $("#letter-counter").html(100 - range);
  if (range >= 100) {
    $("#letter-counter").text("0");
  }
});
// &====================================================|JQ Functions for Duration|==================================================
function countDown() {
  let now = new Date();
  now = Math.floor(now.getTime() / 1000);

  var future = "2024-10-10 09:56:00";
  var modifiedDateString = future.replace(" ", "T");
  var futureDate = new Date(modifiedDateString);
  futureDate = Math.floor(futureDate.getTime() / 1000);

  let timeDifference = futureDate - now;
  console.log(timeDifference);
  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / (60 * 60));
  let mins = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let secs = Math.floor(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );
  // let hours = Math.floor(timeDifference / (60 * 60));
  // let mins = Math.floor(timeDifference / 60);
  // let secs = Math.floor(timeDifference);
  $("#Duration span").eq(0).text(`${days} D`);
  $("#Duration span").eq(1).text(`${hours} h`);
  $("#Duration span").eq(2).text(`${mins} m`);
  $("#Duration span").eq(3).text(`${secs} s`);
  setInterval(function () {
    countDown();
  }, 1000);
}
$(function () {
  countDown();
});
