let timeLine = gsap.timeline()

timeLine.from('.h1Next', {
    x:40,
    duration:1,
    opacity:0,
    delay:0.6,

})

timeLine.from('.span', {
    x:40,
    stagger:1
})
// timeLine.from('li', {
//     y:-30,
//     duration:1,
//     opacity:0,
//     stagger:1

// })
// timeLine.from('.h1M', {
//     y:30,
//     duration:1.5,
//     opacity:0,
//     stagger:1

// }) 