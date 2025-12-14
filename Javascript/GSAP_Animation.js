//🔸 Initial and Final Animation , to for intial to final and final for the final to initial

// gsap.to("#box",{
//     x:1000,
//     rotate:360,
//     backgroundColor:"blue",
//     duration: 3,
//     delay:1
// })

// gsap.from("#box",{
//     x:1000,
//     rotate:360,
//     backgroundColor:"blue",
//     duration: 3,
//     delay: 1
// })


//🔸 Timline animation in gsap


//var t1 = gsap.timeline()       //timeline its organise the animation its make the animation element in sequence like ek element ka animation end hone kae baad dusre element ka animation shuru ho. without give the delay ...
//t1.to("#box1",{
//     x:1200,
//     rotate:360,
//     scale: 0.5,
//     duration:2,
    
// })

// t1.to("#box2",{
//     x:1200,
//     rotate:360,
//     scale:0.5,
//     duration:2,
    
// })

// t1.to("#box3",{
//     x:1200,
//     rotate:360,
//     scale:0.5,
//     duration:2,
    
// })




//🔸 ScrollTrigger effect

//Copy and past the ScrollTrigger cdn in html file



gsap.from("#page1 #circle",{
    scale: 0,
    duration: 2,
    rotate:720
})

gsap.from("#page2 #circle",{
    scale: 0,
    duration: 2,
    rotate:720,
    scrollTrigger:{
        trigger:"#page2 #circle",
        scroller:"body",
        start:"top 60%",
        end:"top 30%",
        markers:true,     //its a mark where the scroll start and end.
        scrub:true   // true is make animation not smoth but i like it .
    } 
})

gsap.from("#page3 #circle",{
    scale: 0,
    duration: 2,
    rotate:720,
    scrollTrigger:{
        trigger: "#page3 #circle",
        scroller: "body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:2            //scrub:Any number for according to smothness ,scrub is the property which surprise you this just make then animation as per scroll like when we scroll down this make animate in forward direction and when we scroll up then animation in backward direction means opposite direction...

    }
})