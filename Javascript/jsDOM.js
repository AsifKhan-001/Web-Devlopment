//🛑 Accessing Elements


// select the Elements

//var btn = document.querySelector('button')   //Jo bhi aap select karna chate ho usse SINGLE QUOETS '' mae dalo just like button, to access this selection save it in any variable or something 

//🔸 to select the any id of html

//var ids = document.querySelector('#hola')   // there is the # for the id and in the sigle quoets

//🔸 to select the any class of html

//var cla = document.querySelector('.hey')   // there is the . for the class and in the single quoets

//🔸 to select any tag

//var tags = document.querySelector('h3')    // there is the directly tag name and in the single quoets


//🛑 Modefying the Text

//var downl = document.querySelector("button");
//downl.textContent = "Starting Now...";          //here i actually moddify the text which is in the downl and downl select a button tag so i chagne the text of the button see in the open in live server 



//var h1 = document.querySelector('h1')
//h1.textContent = "How are you ?"       // " = " this sign actually overwrite the which text already exist by the html

//h1.textContent += "How are you there?"     //" += " this sign add this text after the existing text which text by the html


//🔸 If you would like to the add a tag in specific tag of the HTML then use the "innerHTML" in js file
// must be remember if you want the tag not the text for the text use textContent okk

//h1.innerHTML = "<i>Hello Bhai</i>"      // this hello bhai in the i tag not the text okk this i tag actually act in the html h1 tag to see that open the live server and inspect it ,but the text is the text hello bhai but i give that a tag to access anywhere is i tag not print on the web , on the web only this text print if i use the textContent the is i tag also print on the web and = and += are same as above okk.


//🛑Modify the style of the any tag by the js

//var h1 = document.querySelector('h1');
//h1.style.color = 'red'                  // .style show i work on the style and .color tell that i would like to work on the color and after = you would like any change lik fontFamily change color change these all are in single '' or doule "" quotes , if there is no any qoutes then js give an error 
//h1.style.fontFamily = "gilroy";        // font family F is capital its usse in js after first word the second word first letter is capital 
//h1.style.fontSize = '126px'


//🔸 If i want to apply any css property when i want through the js then i acheive it by classList.add and if i want to remove the property of any css at any specific time the i do with classList.remove in js look at that below

// firstofall select the tag and then select the class
// 🔸🔸 MUST follow these instruction Don't give the class to the h1 tag in html this is only h1 tag and MUST link the css to the HTML and JS file also script with html
//var h1 = document.querySelector('h1');
//h1.classList.add('makeitred');           // this add the .makeitred css must rememberin the  add there is makeitred NOT .makeitred okk
//h1.classList.remove('makeitred');        // this remove the makeitred css




//🛑 Add any element in HTML with the help of JS

//var h1 = document.createElement('h1');      // Here i create an element and select it 
//h1.textContent = "hey,,,";
//h1.classList.add('makeitred')
//document.querySelector("body").appendChild(h1);      // Here with help of querySelector i select where i would like to the store or add the this tag in html i select the body its means i add this tag in body of the html &&& after select then i apped this tag whats i make it like appendChild add this tag in html selcted section in the appendChild i pass what i want to append in the selected portion of theand see in the appendChild the h1 tag is without the QUOTES


//🔸 add any image tag like same as it

//var img = document.createElement('img')
//img.src="https://images.unsplash.com/photo-1761839256951-10c4468c3621?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//document.querySelector('body').appendChild(img)
//document.querySelector('body').removeChild(img)     //this remove the img from the body its i use for anythings for h1 tag and etc....


//🛑 Event Handling


//🔸🔸 JUst like click we have some other things for addEventListener 1. click , 2. dbclick : this is double click 
// 3. mouseover : Jab mae mouse us button ye anythings jo aap ne select kar rakha hai , 4. mouseleave : jab mouse us button pae sae leave ho i mean haate jaye and etc for more use chatgpt


//var btn = document.querySelector("button");

// This is for click


//btn.addEventListener('click',function(){       // THats the fantastic things addEventListener here work like when btn mae jo bhi select hai just here is the button selected so when i click on the button then a event accure the is inside function and jo bhi function mae hoga wo click hone par hoga ab wo kuch bhi ho sakta hai okk.
//    btn.textContent = "ADD to cart in 3 Million hours...";
//    btn.style.backgroundColor = 'red';
//    btn.style.fontSize = '120px'
//})


// Now see mouseover and mouseleave magic :

// btn.addEventListener('mouseover',function(){
//     btn.textContent = 'Add To Cart🛒';
//     btn.style.fontSize = '126px'
//     btn.style.backgroundColor = '#9CC6DB';
    // btn.style.transition = 'all ,0.3s ,'ease-in-out''
//})

// btn.addEventListener('mouseleave',function(){
//     btn.textContent = 'Buy Now';
//     btn.style.backgroundColor = 'white';
//     btn.style.fontSize = '16px'
// })



//🛑Event Object: Its help to tell us the position of the cursor when cursor move.


var body = document.querySelector('body');
body.addEventListener("mousemove",function(details){
    console.log(details);
})



















