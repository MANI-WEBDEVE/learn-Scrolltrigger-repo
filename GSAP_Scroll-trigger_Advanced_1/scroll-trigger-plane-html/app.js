document.querySelectorAll(".card").forEach((card) => {
    gsap.to(card, {
        scale: 0,
        opacity: 0,
        scrollTrigger: {
            trigger: card,
            start: "top 15%",
            end: "bottom 15%",
            scrub: true,
        }
    })
})

gsap.to('.end', {
    opacity: '100%',
    scale: 1,
    scrollTrigger: {
        trigger: '.end',
        start: 'top 50%',
        end: 'bottom 15%',
        scrub: true,
    },
   
})
gsap.to('.para',{
    scale:0,
   
    scrollTrigger: {
        trigger: '.para',
        start: 'top 15%',
        end: 'bottom 15%',
       
        scrub: true,
    }
})