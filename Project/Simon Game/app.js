const gamePattern = [];
const buttonColors = ["red", "yellow", "green", "purple"];
let level = 0;
let started = false;

function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $(`.btn.${randomChosenColor}`).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  level++;
  $("h1").text(`Level ${level}`);
}

function playSound(name) {
  const audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}

function animatePress(currentColor) {
  $(`.btn.${currentColor}`).addClass("pressed");
  setTimeout(function () {
    $(`.btn.${currentColor}`).removeClass("pressed");
  }, 100);
}

$(".btn").click(function () {
  const userChosenColor = $(this).attr("class").split(" ")[1];
  playSound(userChosenColor);
  animatePress(userChosenColor);
});

$(document).keydown(function () {
  if (!started) {
    $("h2").fadeOut();
    nextSequence();
    started = true;
  }
});
