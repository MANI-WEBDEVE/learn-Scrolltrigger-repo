
gsap.from(".page1 .box", {
    scale: 0,
    delay:1,
    duration:1.3,
    rotate:360
})


gsap.from(".page2 .box", {
    scale: 0,
    delay:1,
    duration:1.3,
    rotate:360,
    scrollTrigger:{
        trigger:".page2,box",
        scroller:'body',
        // markers:true,
        start:"top 60%",
        end:"bottom 60%",
        scrub:3
    }
})

gsap.to('.page3 h1', {
    transform: 'translateX(-150%)',
    scrollTrigger:{
        trigger:'.page3',
        scroller:"body",
        scrub:3,
        pin:true
    }
})