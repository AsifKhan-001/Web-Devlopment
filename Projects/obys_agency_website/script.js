const isDesktop = window.matchMedia("(min-width: 600px)");


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

function loaderAnimation(){
    var tl = gsap.timeline();

    tl.from(".line h1, .line h2",{
        y:150,
        stagger: 0.25, 
        duration: 0.3,
    })
    // tl.from(".line h2",{
    //     y:150,
    //     stagger: 0.25, 
    //     duration: 0.5,
    // })
    tl.from("#line1-part1",{
        opacity:0,
        onStart:function(){
            var h5timer = document.querySelector("#line1-part1 h5")
            var grow = 0
            setInterval(function(){
                if(grow<100){
                    h5timer.innerHTML = grow++
                }
                else{
                    h5timer.innerHTML = grow

                }
            },35)
        }
    })

    tl.to(".line h2",{
        animationName:"anime",
        opacity: 1,
    })

    tl.to("#loader",{
        opacity:0,
        duration: 0.2,
        delay: 3,    
    });
    tl.from("#page1",{
        // delay:-0.5,
        y:1000,
        opacity:0,
    })
    tl.to("#loader",{
        display: "none",
    })
    tl.from("#nav",{
        opacity: 0,
    })
    
    tl.from("#hero1",{
        y: 100,
        // stagger:0.5,
        opacity:0,
    })
    tl.from("#hero2 h1",{
        y: 100,
        // stagger:0.2,
    })
    tl.from("#hero3 h2",{
        y: 100,
        // stagger:0.2,
    })
    tl.from("#hero4 h1",{
        y: 100,
        // stagger:0.2,
    })

    tl.from("#video-container",{
        y: 300,
        stagger : 0.2,
        // delay: 0.25
    })

    tl.from("#page3",{
        y: 200,
        stagger : 0.2,
        // delay: 0.25
    })


    // tl.from("#hero1",{
    //     y:150,
    //     opacity: 0,

    // },"+=1.2");
}

function cursorAnimation(){
    //making cursor move circle

    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y,
        })
    })
    // Shery.mouseFollower({
    //     skew: true,
    //     ease: "cubic-bezier(0.23,1,0.320,1)",
    //     duration: 0,
    // });
    // const cursor = document.querySelector("#crsr");
    // let mouseX = 0, mouseY = 0;

    // document.addEventListener("mousemove", (e) => {
    //     mouseX = e.clientX;
    //     mouseY = e.clientY;
    // });

    // gsap.ticker.add(() => {
    //     gsap.to("#crsr", {
    //         x: mouseX,
    //         y: mouseY,
    //         // duration: 0.15,
    //         // ease: "power2.out"
    //     });
    // });

    // Shery.makeMagnet("#nav-part2 h4");
    Shery.makeMagnet("#box1 h5");
    Shery.makeMagnet("#box3 h5");
    var videocontainer = document.querySelector("#video-container")
    var video = document.querySelector("#video-container video")
    var image = document.querySelector("#video-container img")
    var icon = document.querySelector("#video-crsr i")
    videocontainer.addEventListener("mouseenter",function(){
        videocontainer.addEventListener("mousemove",function(dets){
            // gsap.to("#crsr",{
            //     opacity: 0,
            // })
            if (isDesktop.matches){
                gsap.to("#crsr",{
                    opacity: 0,
                })
                gsap.to("#video-crsr",{
                    left:dets.x-480,
                    y:dets.y-120,
                })

            }
            else{
                
            }

        })

    })
    videocontainer.addEventListener("mouseleave",function(){
        gsap.to("#crsr",{
            opacity: 1,
        })
        gsap.to("#video-crsr",{
            top: "1%",
            left: "70%",
            
        })
        // image.style.opacity = 1,
        // video.pause()

        // icon.classList.remove("ri-pause-fill");
        // icon.classList.add("ri-play-fill");
        

    })


    var flag = 0;
    videocontainer.addEventListener("click",function(){
        if(flag == 0){
            image.style.opacity =0
            video.play()
            video.style.opacity = 1

            document.querySelector("#video-crsr").innerHTML = `<i class="ri-pause-fill"></i>`
            gsap.to("#video-crsr",{
                scale: 0.5,
            })
        flag =1
        }
        else{
           image.style.opacity =1
            video.pause()
            video.style.opacity = 0
            document.querySelector("#video-crsr").innerHTML = `<i class="ri-play-fill"></i>`
            gsap.to("#video-crsr",{
                scale: 1,
            }) 
        flag = 0
        }
        
        // icon.classList.add("ri-pause-fill");
        // icon.classList.remove("ri-play-fill");
        
    });

    

}

function sheryAnimation(){
    // document.querySelectorAll(".image-div").forEach((elem)=>{
        Shery.imageEffect(".image-div",{
            style:5,
            config:{"a":{"value":1.15,"range":[0,30]},"b":{"value":-0.31,"range":[-1,1]},"zindex":{"value": -99999999,"range":[-9999999,9999999]},"aspect":{"value":0.7272756554789667},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.92,"range":[0,10]},"metaball":{"value":0.35,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10.69,"range":[0,100]}},    //this is paste from the debug panel and click on the save to clipboard then this automatic copy and then paste here in config.
            debug:false,
            gooey:true,
            
        })
    // Shery.imageEffect("#image-div2",{
    //     style:5,
    //     config:{"a":{"value":1.15,"range":[0,30]},"b":{"value":-0.31,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272756554789667},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.92,"range":[0,10]},"metaball":{"value":0.35,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10.69,"range":[0,100]}},    //this is paste from the debug panel and click on the save to clipboard then this automatic copy and then paste here in config.
    //     debug:true,
    //     gooey:true,
    // })
    // Shery.imageEffect("#image-div3",{
    //     style:5,
    //     config:{"a":{"value":1.15,"range":[0,30]},"b":{"value":-0.31,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272756554789667},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.92,"range":[0,10]},"metaball":{"value":0.35,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10.69,"range":[0,100]}},    //this is paste from the debug panel and click on the save to clipboard then this automatic copy and then paste here in config.
    //     debug:true,
    //     gooey:true,
    // })
    // Shery.imageEffect("#image-div4",{
    //     style:5,
    //     config:{"a":{"value":1.15,"range":[0,30]},"b":{"value":-0.31,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272756554789667},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.92,"range":[0,10]},"metaball":{"value":0.35,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10.69,"range":[0,100]}},    //this is paste from the debug panel and click on the save to clipboard then this automatic copy and then paste here in config.
    //     debug:true,
    //     gooey:true,
    // })
}



// locomotiveAnimation()



// Shery.imageEffect("#image-div1",{
//             style:5,
//             config:{"a":{"value":1.15,"range":[0,30]},"b":{"value":-0.31,"range":[-1,1]},"zindex":{"value": -99999999,"range":[-9999999,9999999]},"aspect":{"value":0.7272756554789667},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.92,"range":[0,10]},"metaball":{"value":0.35,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10.69,"range":[0,100]}},    //this is paste from the debug panel and click on the save to clipboard then this automatic copy and then paste here in config.
//             debug:true,
//             gooey:true,
            
// })

// Shery.imageEffect("#image-div2",{
//             style:5,
//             config:{"a":{"value":1.15,"range":[0,30]},"b":{"value":-0.31,"range":[-1,1]},"zindex":{"value": -99999999,"range":[-9999999,9999999]},"aspect":{"value":0.7272756554789667},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.92,"range":[0,10]},"metaball":{"value":0.35,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10.69,"range":[0,100]}},    //this is paste from the debug panel and click on the save to clipboard then this automatic copy and then paste here in config.
//             debug:true,
//             gooey:true,
            
// })

// Shery.imageEffect("#image-div3",{
//             style:5,
//             config:{"a":{"value":1.15,"range":[0,30]},"b":{"value":-0.31,"range":[-1,1]},"zindex":{"value": -99999999,"range":[-9999999,9999999]},"aspect":{"value":0.7272756554789667},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.92,"range":[0,10]},"metaball":{"value":0.35,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10.69,"range":[0,100]}},    //this is paste from the debug panel and click on the save to clipboard then this automatic copy and then paste here in config.
//             debug:true,
//             gooey:true,
// })

// Shery.imageEffect("#image-div4",{
//             style:5,
//             config:{"a":{"value":1.15,"range":[0,30]},"b":{"value":-0.31,"range":[-1,1]},"zindex":{"value": -99999999,"range":[-9999999,9999999]},"aspect":{"value":0.7272756554789667},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.92,"range":[0,10]},"metaball":{"value":0.35,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10.69,"range":[0,100]}},    //this is paste from the debug panel and click on the save to clipboard then this automatic copy and then paste here in config.
//             debug:true,
//             gooey:true,
// })
if (isDesktop.matches){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#flag",{
            x:dets.x,
            y:dets.y+60,
        })
    })

    document.querySelector("#hero3").addEventListener("mouseenter",function(){
        gsap.to("#flag",{
            opacity: 1,
        })
    })

    document.querySelector("#hero3").addEventListener("mouseleave",function(){
        gsap.to("#flag",{
            opacity: 0,
        })
    })
}
else{
    document.addEventListener("mousemove",function(dets){
        gsap.to("#flag",{
            x:dets.x-50,
            y:dets.y+30,
        })
    })

    document.querySelector("#hero3").addEventListener("mouseenter",function(){
        gsap.to("#flag",{
            opacity: 1,
        })
    })

    document.querySelector("#hero3").addEventListener("mouseleave",function(){
        gsap.to("#flag",{
            opacity: 0,
        })
    })
}
function letsAnimation(){
    
    var lets1 = document.querySelector("#footer h1")
    var myflag = 0;
    lets1.addEventListener("mouseenter",function(){
        if (isDesktop.matches){
            if(myflag == 0){
                lets1.style.fontFamily = "silk serif";
                // $('#footer h1').textillate({in:{ effect:'fadeIn'}});
                // // lets2.style.opacity = 0
                gsap.from("#footer h1",{
                        x:-150,
                        stagger: 0.25, 
                        duration: 1,
                    })
            
            flag = 1;
            }
            else{
                var lets2 = document.querySelector("#footer h2")
                lets1.addEventListener("mouseleave",function(){
                // $('#footer h1').textillate({out: {effect: 'fadeout'}});
                    // lets1.style.opacity = 0
                    // lets2.style.opacity = 1
                    lets1.style.fontFamily = "plain";
                    gsap.from("#footer h1",{
                        x:150,
                        stagger: 0.25, 
                        duration: 1,
                    })
                })
            flag=0;
            }
        }
        else{
        //     if(myflag == 0){
        //         lets1.style.fontFamily = "silk serif";
        //         // $('#footer h1').textillate({in:{ effect:'fadeIn'}});
        //         // // lets2.style.opacity = 0
        //         gsap.from("#footer h1",{
        //                 x:-100,
        //                 stagger: 0.25, 
        //                 duration: 1,
        //             })
            
        //     flag = 1;
        //     }
        //     else{
        //         var lets2 = document.querySelector("#footer h2")
        //         lets1.addEventListener("mouseleave",function(){
        //         // $('#footer h1').textillate({out: {effect: 'fadeout'}});
        //             // lets1.style.opacity = 0
        //             // lets2.style.opacity = 1
        //             lets1.style.fontFamily = "plain";
        //             gsap.from("#footer h1",{
        //                 x:100,
        //                 stagger: 0.25, 
        //                 duration: 1,
        //             })
        //         })
        //     flag=0;
        //     }

            
        }
            
    })
    // var lets2 = document.querySelector("#footer h2")
    //     lets2.addEventListener("mouseleave",function(){
    //         // $('#footer h1').textillate({out: {effect: 'fadeout'}});
    //         lets1.style.opacity = 1
    //         lets2.style.opacity = 1
    //         gsap.from("#footer h2",{
    //             x:150,
    //             stagger: 0.25, 
    //             duration: 1,
    //         })
    // })
}



function letAnimation(){
    var lets1 = document.querySelector("#lets h1")
    var lets2 = document.querySelector("#lets")
    var lets3 = document.querySelector("#lets i")
        if (isDesktop.matches){
            lets2.addEventListener("mouseenter",function(){
                lets1.style.fontFamily = "silk serif";
                lets1.style.color = "transparent";
                lets1.style.webkitTextStroke = "0.1vw #fff"
                    // $('#footer h1').textillate({in:{ effect:'fadeIn'}});
                    // // lets2.style.opacity = 0
                gsap.from("#footer h1,#lets i",{
                    // x:-120,
                    x:-100,
                    // opacity:0,
                    // stagger: 0.25, 
                    duration: 1,
                })
                // gsap.from("#lets i",{
                //     // x:-50,
                //     delay: 0.3,
                //     // stagger: 0.25, 
                //     duration: 1,
                // })
                
                
            })
                
                    
            lets2.addEventListener("mouseleave",function(){
                // $('#footer h1').textillate({out: {effect: 'fadeout'}});
                    // lets1.style.opacity = 0
                    // lets2.style.opacity = 1
                lets1.style.fontFamily = "plain";
                lets1.style.color = "#fff";
                gsap.from("#lets h1,#lets i",{
                    // x:120,
                    // opacity:0,
                    x:100,
                    // stagger: 0.25, 
                    duration: 1,
                })
                // gsap.from("#lets i",{
                //     // x:10,
                //     delay: 0.3,
                //     // stagger: 0.25, 
                //     duration: 1,
                // })
            })
        }
}

    
        
        
            
    
Shery.makeMagnet(".mynav-text h4")
Shery.makeMagnet("#nav-part2 h4");
// Shery.makeMagnet("#last-circle");





function underlineAnimation(){
    gsap.from(".underline5",{
        x:1000,
        opacity: 0,
        duration: 1,
        scrollTrigger:{
            trigger:".underline5",
            scroller:"#main",
            start: "top 110%",
            // marker: true,
        }
    })

    gsap.from(".underline",{
        x:1000,
        opacity: 0,
        duration: 1,
        scrollTrigger:{
            trigger:".underline",
            scroller:"#main",
            start: "top 110%",
            // marker: true,
        }
    })

    gsap.from(".underline2",{
        x:1000,
        opacity: 0,
        duration: 1,
        scrollTrigger:{
            trigger:".underline2",
            scroller:"#main",
            start: "top 110%",
            // marker: true,
        }
    })

    gsap.from(".underline3",{
        x:1000,
        opacity: 0,
        duration: 1,
        scrollTrigger:{
            trigger:".underline3",
            scroller:"#main",
            start: "top 110%",
            // marker: true,
        }
    })

    gsap.from(".underline4",{
        x:1000,
        opacity: 0,
        duration: 1,
        scrollTrigger:{
            trigger:".underline4",
            scroller:"#main",
            start: "top 110%",
            //marker: true,
        }
    })
}





loaderAnimation()
cursorAnimation()
locomotiveAnimation()
sheryAnimation()
underlineAnimation()
letAnimation()
// letsAnimation()



