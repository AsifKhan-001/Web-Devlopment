var t1 = gsap.timeline()

t1.from("#nav h3",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.3,
    stagger:0.2         // stagger is just animate the all h3 one to one means ek kae baad ek and i give 1 means after 1 sec and same 0.3 sec.
})

t1.from("#main h1",{
    x:-500,
    opacity:0,
    duration:0.5,
    stagger:0.3
})
t1.from("img",{
    x:100,
    opacity:0,
    rotate: 45,
    stagger:0.5

})