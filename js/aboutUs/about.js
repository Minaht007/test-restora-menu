const text =
  "We have been working for over 10 years. Our priorities are not only tasty and interesting food, but also healthy. Every product we buy is certified organic.";

const message = document.querySelector(".textaboutUs");

message.textContent = text;

const bgImage = new Image();
bgImage.src = "../../images/chef.jpg";

bgImage.onload = function () {
  const headerHeight = document.querySelector("header").offsetHeight;
  const viewportHeight = window.innerHeight - headerHeight;

  bgImage.style.width = "1200px";
  bgImage.style.height = viewportHeight + "px";
  bgImage.style.objectFit = "cover";

  const bgbane = document.querySelector(".bgbane");
  bgbane.style.position = "relative";
  bgbane.style.overflow = "hidden";
  bgbane.appendChild(bgImage);
};
