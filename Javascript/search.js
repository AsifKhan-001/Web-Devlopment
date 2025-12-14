var input = document.querySelector("input")


//below code are for show the datas on web just using java Script
var data = [
    {name: "Julian" , src: "https://images.unsplash.com/photo-1640465979334-0dc49f69f7be?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Asif" , src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Juhi" , src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1061&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Saniya" , src: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Virginia" , src: "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

var pers="";
data.forEach(function(elem){
    pers += `<div class="person">
    <div class="image">
        <img id="person1img" src="${elem.src}" alt="image">
        </div>
    <h4 id="person1name">${elem.name}</h4>
</div>`;
})

document.querySelector(".people").innerHTML = pers;

input.addEventListener("input",function(){           // thats for searching the data
    var matching = data.filter(function(e){
        return e.name.startsWith(input.value)
    })
    var newuser = "";
    matching.forEach(function(elem){
    newuser += `<div class="person">
    <div class="image">
        <img id="person1img" src="${elem.src}" alt="image">
        </div>
    <h4 id="person1name">${elem.name}</h4>
</div>`;
})
document.querySelector(".people").innerHTML = newuser;

})