let main = document.querySelector(".main");

let cursor = document.querySelector(".cursor");

let imageDiv = document.querySelector(".image");

main.addEventListener("mousemove", (det) => {
  // console.log(det)
  gsap.to(cursor, {
    x: det.x,
    y: det.y,
    duration: 1.5,
    // ease: "power2.out",
    ease: "power3.out",
  });
});

imageDiv.addEventListener("mouseenter", (det) => {
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    scale: 4,
    scrub:3,
    backgroundColor:'#c1c1c19c'
  });
  gsap.to(imageDiv, {
    opacity:1,
    y:-40,
    
  })
});
imageDiv.addEventListener("mouseleave", (det) => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    scrub:2,
    backgroundColor:'#fff'
  });
  gsap.to(imageDiv, {
    opacity:0,
     
     y:0
     
  })
});
