window.addEventListener("keydown", (dets) => {
  // console.log(dets.code)
  if (dets.code === "ArrowDown") {
    gsap.to(".marque", {
      transform: "translateX(-200%)",
      repeat: -1, // --> infinite
      duration: 4,
      ease: "none",
    });
    gsap.to(".marque img", {
      rotate: -180,
    });
  } else {
    gsap.to(".marque", {
      transform: "translateX(0%)",
      repeat: -1, // --> infinite
      duration: 4,
      ease: "none",
    });
    gsap.to(".marque img", {
      rotate: 0,
    });
  }
});

// gsap.to('.marque', {
//     transform:'translateX(-100%)',
//     repeat:-1, // --> infinite
//     duration:1.6,
//     ease:'none'
// })
