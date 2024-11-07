function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

init();

var cursor = document.querySelector(".cursor");
var main = document.querySelector(".main");
var video = document.querySelector(".video");

document.addEventListener("mousemove", function (dets) {
  cursor.style.top = dets.y + 5 + "px";
  cursor.style.left = dets.x + 5 + "px";
});
video.addEventListener("mouseenter", function () {
  (cursor.style.width = "100px"),
    (cursor.style.borderRadius = "50px"),
    (cursor.innerHTML = "view more");
});
video.addEventListener("mouseleave", function () {
  (cursor.style.width = "20px"),
    (cursor.style.borderRadius = "50%"),
    (cursor.innerHTML = "");
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    // markers: true,
    start: "top 30%",
    end: "top 0%",
    scrub: 3,
  },
});

tl.to(
  ".page1 h1",
  {
    x: "-100",
  },
  "a1"
);
tl.to(
  ".page1 h2",
  {
    x: "100",
  },
  "a1"
);
tl.to(
  ".page1 .video",
  {
    width: "90%",
  },
  "a1"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2 ",
    scroller: ".main",
    // markers: true,
    start: "top -5%",
    end: "top 0%",
    scrub: 3,
  },
});

tl2.to(".main", {
  backgroundColor: "#fff",
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    // markers: true,
    start: "top -480%",
    end: "top -200%",
    scrub: 3,
  },
});
tl3.to(".main", {
  backgroundColor: "#0f0d0d",
});

var box = document.querySelectorAll(".box");
box.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    var att = elem.getAttribute("data-image");
    cursor.style.width = "300px";
    cursor.style.height = "200px";
    cursor.style.borderRadius = "0px";
    cursor.style.backgroundImage = `url(${att})`;
  });
  elem.addEventListener("mouseleave", function () {
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.style.borderRadius = "50%";
    cursor.style.backgroundImage = "none";
  });
});

var h4 = document.querySelectorAll(".nav h4");
var purple = document.querySelector("#purple");

h4.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    purple.style.display = "block";
    purple.style.opacity = "1";
  });
  elem.addEventListener("mouseleave", function () {
    purple.style.display = "none";
    purple.style.opacity = "0";
  });
});

var text = document.querySelectorAll(".container-purple h1");
var container = document.querySelectorAll(".container-purple");

h4.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    text.forEach(function (t) {
      t.innerHTML = elem.textContent;
    });
    gsap.to(container, {
      transform: "translateX(-200%)",
      duration: 4,
      repeat: -1,
      ease: "none",
    });
  });
  elem.addEventListener("mouseleave", function () {
    gsap.to(container, {
      transform: "translateX(0%)",
      duration: 2,
      repeat: -1,
      ease: "none",
    });
  });
});
