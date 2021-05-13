let nav=document.querySelector("#navLinks");
let menuBtn=document.querySelector("#menuBtn");
let closeBtn=document.querySelector("#closeBtn");
menuBtn.addEventListener('click',()=>
{
    console.log("menu clicked");
   nav.classList.add("show");
})
closeBtn.addEventListener('click',()=>
{
    console.log("close clicked")
    nav.classList.remove("show");
})

