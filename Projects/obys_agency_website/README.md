Obys Agency — Website 



This project is my frontend clone of the original Obys Agency website. I didn’t just copy the UI — I tried to understand why things behave the way they do on the original site and then rebuilt those interactions using plain HTML, CSS and JavaScript, with animation libraries layered on top.

This repo shows how I approach animation-heavy websites: break the layout into sections, control scroll properly, sync animations with scroll, and then make sure the same logic doesn’t break on smaller screens.


What this project is about:

The original Obys Agency site is all about movement, timing and interaction. Text doesn’t just appear, images don’t just sit there, and scrolling is not the browser default scroll.



So my goal was:

recreate the feel, not pixel-perfect copy

understand loader timing, text reveals and scroll behaviour

handle desktop and mobile differently where required




Tech & tools I used:



I kept the stack simple but powerful:

HTML — clean structure, section-based layout

CSS — heavy use of vw, vh, flexbox and custom hover states

JavaScript — all animation logic and interactions

GSAP — timeline-based animations

ScrollTrigger — syncing animations with scroll

Locomotive Scroll — smooth scrolling and scroll-speed control

Shery.js — image distortion, magnetic effects and gooey hover

No frameworks, no React — just fundamentals + animation libraries.




Major features I built:



1. Loader animation (first impression matters)

The website starts with a loader instead of directly showing the page.

What happens here:

text comes from bottom using GSAP timeline

percentage counter increases from 0 to 100 using JS interval

text switches fonts during animation (Plain ↔ Silk Serif)

once loader ends, it smoothly reveals Page 1 instead of a hard cut

This part taught me a lot about GSAP timelines and sequencing.




2. Custom cursor (desktop-first interaction)

I replaced the default cursor with a custom circular cursor.

cursor follows mouse using mousemove + GSAP

blend mode is used so it feels natural on dark background

cursor hides automatically when interacting with video section

On mobile, I don’t force this behaviour, because cursor logic doesn’t make sense there.




3. Smooth scrolling with Locomotive + ScrollTrigger

Instead of normal browser scroll, I used Locomotive Scroll.

Key things I handled:

ScrollTrigger proxy setup (very important)

syncing GSAP animations with Locomotive scroll

different scroll speeds for sections using data-scroll-speed

This makes sections like Page 2 and Page 3 move at different speeds and gives that premium agency feel.



4. Hero text interactions

The hero section text is not static:

text comes in line by line

hover effect switches text to stroke-only style

font weight and stroke change on hover

This is mostly done using CSS + GSAP timing, not JS-heavy logic.




5. Video section with play / pause logic

This part behaves differently than a normal video:

video is hidden behind an image initially

clicking toggles play and pause

play/pause icon is attached to a floating cursor

cursor position changes based on mouse movement (desktop only)

I also check screen width using JS so that desktop and mobile don’t share the same logic blindly.





6. Image hover distortion (Shery.js)

The project section uses Shery image effects:

gooey distortion on hover

displacement animation synced with mouse

config values copied and tuned from Shery debug panel

This part helped me understand how GPU-heavy effects behave and why they should be used carefully.

Responsive approach (not just media queries)

I didn’t only rely on CSS media queries — I also adjusted JavaScript behaviour based on screen width.




CSS side:

used @media (max-width: 600px)

resized everything using vw instead of fixed pixels

adjusted margins, section heights and font sizes

stacked layouts vertically where desktop used horizontal space




JavaScript side:

used window.matchMedia('(min-width: 600px)')

disabled cursor-heavy animations on mobile

adjusted video cursor behaviour for small screens

This avoids unnecessary calculations and keeps mobile smooth.





Folder structure:

Obys-Agency-project/

│
├── index.html

├── style.css

├── script.js

├── favicon.ico

└── Assest/

    ├── img1-1.jpg
    
    ├── img1-2.jpg
    
    ├── img2-1.jpg
    
    ├── img2-2.jpg
    
    ├── img4-1.jpg
    
    └── img4-2.jpg
    

What I learned from this project:



how to control scroll instead of reacting to it

why animation timing matters more than animation count

how to combine multiple libraries without conflicts

how desktop-first effects must be adapted for mobile

how real agency websites structure interaction, not just UI

At Last but not least How I faces Multiple Problems and i INVEST My Hunderd of Hours to solve these problems which i face when i work to build this web and learn lot of new technique to Understand the problem and handle it and Resolve these problems.




Disclaimer:

This project is a learning-based clone.

Design inspiration belongs to Obys Agency

This is not a commercial project

Built purely for frontend practice and understanding advanced UI interactions




Final note:

This project pushed me out of basic layouts into interaction-focused frontend work. It helped me think less about “what looks good” and more about “what feels good when you scroll, hover and click”.

If you’re checking this repo, I’d recommend opening it on desktop first, then on mobile — the difference is intentional.
