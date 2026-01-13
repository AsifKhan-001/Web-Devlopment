


function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
        smoothMobile: true,
        smartphone: { smooth: true },
        tablet: { smooth: true }
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });




    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}


function page2imagescroll() {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger:"#page2",
            scroller: "#main",
            
            // start: "top 78%",
            // end: "top 50%",
            start: "top top",
            end: "+=100%",      // 🔥 its scroll the image faster  or slower is +=200% image scroll slow.
            scrub: true,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            
            
                
        }
    })
    tl.to("#page2 img",{
        scale: 15,
        left: "41vw",
        clipPath: "polygon(0% 25%, 100% 25%, 100% 75%, 0% 75%)",
        ease: "none",
        
    },0);
    tl.to("#page2 h1",{
        color: "#ffffff",
        duration: 0.05,   // 🔥 faster than others
        ease: "none"
    },0.2);
    tl.to("#to",{
        marginLeft: "6vw",
        ease: "none",
    },0);
    tl.to("#global",{
        marginLeft: "-3vw",
        ease: "none",
    },0);
}


// function page3textAnimation(){
//     let t1 = gsap.timeline({
        
//         scrollTrigger: {
//             trigger: "#page3",
//             scroller: "#main",
//             start: "top 100%",
//             end: "top 5%",
//             scrub: 1,

//         }
        
//     });

//     t1.call(() => {
//         $('#page3 h5').textillate({
//             in: { rotateUpLeft' }
//         });
//     })
//     t1.call(() => {
//         $('#page3 h1').textillate({
//             in: { rotateUpLeft' }
//         });
//     })
    // t1.from("#page3 h5",{
        
        
    // })
    // t1.from("#the1",{
        
        
    // })
    // t1.from("#the2",{
        
        
    // })
    // t1.from("#the3",{
        
        
    // })
    // t1.from("#the4",{
        
        
    // })
//}


// function page3textAnimation() {
    
//     ScrollTrigger.create({
//         trigger: "#page3",
//         scroller: "#main",
//         start: "top 70%",
//         once: true,
//         onEnter: () => {

//             // h5 — starts first, faster
//             $("#page3 h5")
//               .css("visibility", "visible")
//               .textillate({
//                   minDisplayTime: 300,
//                   in: {
//                       effect: "fadeIn",
//                       delay: 50   // ⚡ faster
//                   }
//               });

//             // h1 — starts a little later, line by line
//             setTimeout(() => {
//                 $("#the1")
//                   .css("visibility", "visible")
//                   .textillate({
//                       split: "lines",
//                       minDisplayTime: 300,
//                       in: {
//                           effect: "fadeIn",
//                           delay: 70,   // ⚡ faster but smooth
//                           sequence: true
//                       }
//                   });
//             }, 1200); // ⏳ h1 comes after h5

//             setTimeout(() => {
//                 $("#the2")
//                   .css("visibility", "visible")
//                   .textillate({
//                       split: "lines",
//                       minDisplayTime: 300,
//                       in: {
//                           effect: "fadeIn",
//                           delay: 70,   // ⚡ faster but smooth
//                           sequence: true
//                       }
//                   });
//             }, 1400); // ⏳ h1 comes after h5

//             setTimeout(() => {
//                 $("#the3")
//                   .css("visibility", "visible")
//                   .textillate({
//                       split: "lines",
//                       minDisplayTime: 300,
//                       in: {
//                           effect: "fadeIn",
//                           delay: 70,   // ⚡ faster but smooth
//                           sequence: true
//                       }
//                   });
//             }, 1700); // ⏳ h1 comes after h5

//             setTimeout(() => {
//                 $("#the4")
//                   .css("visibility", "visible")
//                   .textillate({
//                       split: "lines",
//                       minDisplayTime: 300,
//                       in: {
//                           effect: "fadeIn",
//                           delay: 70,   // ⚡ faster but smooth
//                           sequence: true
//                       }
//                   });
//             }, 1900); // ⏳ h1 comes after h5
//         }
//     });

// }


function page3textsplitting(){
    var allh1 = document.querySelectorAll("#page3_texts h1");
    allh1.forEach(function(elem){
        var clutter = "";
        var h1text = elem.textContent
        var splittedText = h1text.split("")
        splittedText.forEach(function(e){
            clutter += `<span>${e}</span>`
            elem.innerHTML = clutter
            console.log(elem)
        })
    })
}


function page3textAnimation2(){
    gsap.from("#page3_texts h1 span",{
        y: 60,
        opacity: 0,
        duration: 0.4,
        
        stagger: 0.2,
        
        scrollTrigger: {
            trigger: "#page3_texts h1",
            scroller: "#main",
            start: "top 50%",
            end: "+=70%",
            scrub: 1,

        }
    })
}


function infoboxAnimation(){
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger:"#page3",
                scroller: "#main",
                
                // start: "top 78%",
                // end: "top 50%",
                start: "top top",
                end: "+=100%",      // 🔥 its scroll the image faster  or slower is +=200% image scroll slow.
                scrub: true,
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
            }
        });
        tl.to("#info_box",{
            x:200,
            left: "60%",
        });
        tl.to("#info_box", {
            y: "70%",
        });
        
}

function infoboxAnimation2(){
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page3",
            scroller: "#main",
            start: "top 68%",
            end: "+=78%",
            scrub: true,
            // pin: true,
            
            // anticipatePin: 1,

        }
    });
    tl.to("#info_box",{
        y:"137.5%",
        ease: "none",
    })
}

function textAnimation(){
    let mySplitText = new SplitText(".the",{type:"chars"});
    let chars = mySplitText.chars;

    gsap.from(chars,{
        yPercent: 130,
        stagger: 0.05,
        ease: "back.out",
        duration: 1,
    })
}



function page4textAnimationX(){
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 68%",
            end: "+=78%",
            scrub: true,
            // pin: true,
            
            // anticipatePin: 1,

        }
    });
    tl.to("#page4X",{
        y:"137.5%",
        ease: "none",
    })
    
}

function page4textAnimationN(){
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 8%",
            end: "+=78%",
            scrub: true,
            // pin: true,
            
            // anticipatePin: 1,

        }
    });
    tl.to("#page4N",{
        y:"137.5%",
        ease: "none",
    })
}

// function movebelow(){
//     gsap.to("#info_box",{
//             y: "100%",
//             delay: 4.1,
//         });
        
// }
    
function page7boxAnimation(){
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page7",
            scroller: "#main",
            start: "top 95%",
            end: "+=114%",
            scrub: true,
            // pin: true,
            
            // anticipatePin: 1,

        }
    });
    tl.to("#page7_moving_box",{
        y:"1756%",
        ease: "none",
    })
}

function page7textsplitting(){
    var allh1 = document.querySelectorAll("#uppertext h1");
    allh1.forEach(function(elem){
        var clutter = "";
        var h1text = elem.textContent
        var splittedText = h1text.split("")
        splittedText.forEach(function(e){
            clutter += `<span>${e}</span>`
            elem.innerHTML = clutter
            // console.log(elem)
        })
    })
}


function page7textAnimation1(){
    gsap.to("#uppertext h1 span",{
        color: "#D7FF00",
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#uppertext h1",
            scroller: "#main",
            start: "top 60%",
            end: "+=20%",
            scrub: 0.3,

        }
    })
}

function page7textAnimation2(){
    gsap.to("#uppertext h1 span",{
        color: "#000000",
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#uppertext h1",
            scroller: "#main",
            start: "top 58%",
            end: "+=25%",
            scrub: 1,

        }
    })
}


function page8textsplitting(){
    var allh1 = document.querySelectorAll("#page8TextContainer h1");
    allh1.forEach(function(elem){
        var clutter = "";
        var h1text = elem.textContent
        var splittedText = h1text.split("")
        splittedText.forEach(function(e){
            clutter += `<span>${e}</span>`
            elem.innerHTML = clutter
            console.log(elem)
        })
    })
}


function page8textAnimation2(){
    gsap.from("#page8TextContainer h1 span",{
        y: 60,
        opacity: 0,
        duration: 0.4,
        
        stagger: 0.2,
        
        scrollTrigger: {
            trigger: "#page8TextContainer h1",
            scroller: "#main",
            start: "top 80%",
            end: "+=35%",
            scrub: 1,

        }
    })
}
function page8textAnimation3(){
    gsap.from("#page8_1",{
        y: 20,
        opacity: 0,
        duration: 0.2,
        
        stagger: 0.2,
        
        scrollTrigger: {
            trigger: "#page8_1",
            scroller: "#main",
            start: "top 90%",
            end: "+=50%",
            scrub: 1,

        }
    })
}
function page8textAnimation4(){
    gsap.from("#page8_2",{
        y: 20,
        opacity: 0,
        duration: 0.2,
        
        stagger: 0.2,
        
        scrollTrigger: {
            trigger: "#page8_2",
            scroller: "#main",
            start: "top 87%",
            end: "+=50%",
            scrub: 1,

        }
    })
}

function page8textAnimation5(){
    gsap.from("#page8_3",{
        y: 20,
        opacity: 0,
        duration: 0.2,
        
        stagger: 0.2,
        
        scrollTrigger: {
            trigger: "#page8_3",
            scroller: "#main",
            start: "top 85%",
            end: "+=50%",
            scrub: 1,

        }
    })
}

function page8textAnimation6(){
    gsap.from("#page8_4",{
        y: 20,
        opacity: 0,
        duration: 0.2,
        
        stagger: 0.2,
        
        scrollTrigger: {
            trigger: "#page8_4",
            scroller: "#main",
            start: "top 83%",
            end: "+=50%",
            scrub: 1,

        }
    })
}
function page8textAnimation7(){
    gsap.from("#page8_5",{
        y: "-20",
        opacity: 0,
        duration: 0.2,
        stagger: 0.2,
        
        scrollTrigger: {
            trigger: "#page8_5",
            scroller: "#main",
            start: "top 80%",
            end: "+=50%",
            scrub: 1,

        }
    })
}
function page8textAnimation8(){
    gsap.from(".page8tablehr",{
        x: 300,
        opacity: 0,
        duration: 0.2,
        stagger: 0.2,
        
        scrollTrigger: {
            trigger: ".page8tablehr",
            scroller: "#main",
            start: "top 90%",
            end: "+=50%",
            scrub: 1,

        }
    })
}






window.onload = () => {
    locomotiveAnimation();
    page2imagescroll();
    page3textsplitting()
    page3textAnimation2()
    // textAnimation()
    // page3textAnimation();
    infoboxAnimation();
    // movebelow();
    // infoboxAnimation2()
    page4textAnimationX();
    page4textAnimationN();
    page7boxAnimation();
    page7textsplitting()
    page7textAnimation1()
    page7textAnimation2()
    page8textsplitting()
    page8textAnimation2()
    page8textAnimation3()
    page8textAnimation4()
    page8textAnimation5()
    page8textAnimation6()
    page8textAnimation7()
    page8textAnimation8()
};