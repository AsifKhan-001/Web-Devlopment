//🛑 Q.No. 1 :
// var btn = document.querySelector('button')
// btn.addEventListener('click',function(){
//     var p = document.querySelector('p')
//     p.textContent = "Its a powerful moment when you decide to take control of your well-being. A message to mark this transition is one of self-compassion, strength, and new beginnings."
//     p.style.fontSize = '126px'
//     p.style.color = 'red'
// })



//🛑Q.No. 2: SWAP the images by click
// var btn = document.querySelector('button');
// btn.addEventListener('click',function(){
//     var img1 = document.querySelector('#img1')
//     var src1 = img1.src
//     var img2 = document.querySelector('#img2')
//     var src2 = img2.src
//     img1.src = src2;
//     img2.src = src1;
//})


//🛑 Q.No. 3 : form submit and more without refresh the page

// var form = document.querySelector('form')
// var inp1 = document.querySelector("#inp1")
// var inp2 = document.querySelector("#inp2")
//i can replace these above two selection line by this below its help when we have so many inputs
// var inps = document.querySelectorAll('input[type="text"]') //due to use this type of selectiob the if also change 
// var h4 = document.querySelector("h4")
//var flag = 0;
// form.addEventListener("submit",function(event){
//     event.preventDefault();
    // if (inp1.value === '' || inp2.value === ''){       // approach 1
    //inps.forEach(function(inp){

    //    if (inp.value.trim() === ""){               //  trim() is work like its remove the starting and ending spaces if there is only space then its make the empty this if i not use it and we use only the spaces in input then this not show error okk
            // h4.textContent = "Error Bro , Something Empty there!!!";
            // h4.style.color = 'red';
    //        flag = 1;
    //    }
        // else {
        //     h4.textContent = "";
        //     h4.style.color = 'black';
        // }
    //})
    // if (flag === 1){
    //     h4.textContent = "Error Bro , Something Empty there!!!";
    //     h4.style.color = 'red';
    //     flag=0
    // }
    // else {
    //     h4.textContent = "";
    //     h4.style.color = 'black';
        
    // }
//var form = document.querySelector('form')                   //🔸best approach
//var inps = document.querySelectorAll('input[type="text"]')
//var h4 = document.querySelector("h4")
// form.addEventListener("submit",function(event){     
//     event.preventDefault();
//     for(var i=0 ; i<inps.length ; i++){
//         if(inps[i].value.trim() === ''){                   // trim() is work like its remove the starting and ending spaces if there is only space then its make the empty this if i not use it and we use only the spaces in input then this not show error okk
//             h4.textContent = "Error Bro , Something Empty there!!!";
//             h4.style.color = 'red';
//             break;
//         }
//     }

// })



//🛑 Q.No. 4 : Unordered list 

// var add = document.querySelector('#add')
// var remove = document.querySelector('#remove')
// var inp = document.querySelector('input')
// var ul = document.querySelector('ul')
// var li;
// add.addEventListener('click',function(){
//     if(inp.value.trim() === ''){}
//     else {
//         li = document.createElement('li')
//         li.textContent = inp.value
//         ul.appendChild(li)
//         inp.value = "";
//     }
// })

// remove.addEventListener('click',function(){
//     ul.removeChild(li)
// })





//🛑 Q.No. 5 : CountDown 

// var start = document.querySelector("#start")
// var stop = document.querySelector("#stop")
// var h3 = document.querySelector("h3")
// var myaction;
// start.addEventListener('click',function(){
//     var count = 0;
//     myaction=setInterval(function(){
//         h3.textContent = count;
//         count++;
//     },1000);
// })
// stop.addEventListener('click',function(){
//     clearInterval(myaction);
// })



//🛑 Q.No. 6 : tabs


// var home = document.querySelector("#home")
// var about = document.querySelector("#about")
// var contact = document.querySelector("#contact")
// var hometext = document.querySelector("#myhome")
// var abouttext = document.querySelector("#myabout")
// var contacttext = document.querySelector("#mycontact")

// home.addEventListener("click",function(){
//     SaaraTextHatao()
//     hometext.style.display = "block"
//     //abouttext.style.display = "none"      // we can do that by the function
//     //contacttext.style.display = "none"
// })

// about.addEventListener("click",function(){
//     SaaraTextHatao()
//     abouttext.style.display = "block"
//     //hometext.style.display = "none"
//     //contacttext.style.display = "none"
// })

// contact.addEventListener("click",function(){
//     SaaraTextHatao()
//     contacttext.style.display = "block"
//     //hometext.style.display = "none"
//     //abouttext.style.display = "none"
// })
// function SaaraTextHatao(){
//     document.querySelectorAll("h3").forEach(function(h3){
//         h3.style.display = "none"
//     })
// }



//🛑 Q.No. 7: Download Bar

// var prog = document.querySelector("#progress")
// var h3 = document.querySelector("h3")
// var count = 0
// var bar = setInterval(function(){
//     if(count===100){
        
//         h3.textContent = "Download Completed✅"
//         clearInterval(bar);
//     }
//     count++
//     prog.style.width = count+"%";        //here count+"%" its mean count ki value with the %.
// },100)





//🛑 Q.No. 10: Charactor counter

var textarea = document.querySelector("textarea")
var counter = document.querySelector("#counter")

textarea.addEventListener('input',function(){
    counter.textContent = textarea.value.length
})










