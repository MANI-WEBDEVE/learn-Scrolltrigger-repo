// gsap.to(".box", 
//     {
//         x:1200,
//         duration:2,
//         delay:1,
//         rotate:360,
//         backgroundColor:"yellow",
//         scale:0.2,
//         repeat:-1,
//         yoyo:true
//     }
// )
// gsap.from('h1', 
//     {
//         opacity:0,
//         duration:1,
//         delay:1,
//         x:-30,
//         stagger:-1,
//         repeat: -1,
//         yoyo:true
//     }
// )
// import { gsap } from "gsap";
const timeLine = gsap.timeline();
timeLine.from('.h1', {
    y: -30,
    duration: 1,
    opacity: 0,
    delay: 0.6,
});
timeLine.from('li', {
    y: -30,
    duration: 1,
    opacity: 0,
    stagger: 1,
});
timeLine.from('.h1M', {
    y: 30,
    duration: 1.5,
    opacity: 0,
    stagger: 1,
});
const app = () => {
};
