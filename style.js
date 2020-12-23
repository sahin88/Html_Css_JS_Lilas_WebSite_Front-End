
var hamburgerButton = document.getElementById("hamburgerButton");
var sliderDiv= document.getElementById("sliderid");
var selectIcon1 = document.getElementById("selectIcon1");
var selectIcon2 = document.getElementById("selectIcon2");
var selectIcon3= document.getElementById("selectIcon3");
var images=document.getElementsByClassName("images");
var queryAll=document.querySelectorAll(".help_photos img")
var bigOne= document.getElementById("big_one")
var photo_list=["images/image_1.jpg", "image_2.jpg","image_3.jpg","image_4.jpg","image_5.jpg"]



queryAll.forEach(items=>{
   
    let classListt=items.classList

   
    classListt.remove("active")
    items.addEventListener("click", function() {
        queryAll.forEach(items=>{
            items.classList.remove("active")
        })
    
        this.classList.add("active")
        bigOne.src=this.src
       

    })
})
window.addEventListener("resize", ()=>{
    
    var icon_list=[selectIcon1,selectIcon2,selectIcon3]
   

    if (document.documentElement.clientWidth <= 500){
        hamburgerButton.classList.remove("fa-2x");
        hamburgerButton.classList.add("fa-1x");
        for(let i=0; i <icon_list.length; i++){
            icon_list[i].classList.remove("fa-2x");
            icon_list[i].classList.add("fa-1x")

        }
   
    }
    else{
        hamburgerButton.classList.remove("fa-1x");
        hamburgerButton.classList.add("fa-2x");
        for(let i=0; i <icon_list.length; i++){
            icon_list[i].classList.remove("fa-1x");
            icon_list[i].classList.add("fa-2x")}
    }
})

console.log("john elvan daltom",sliderDiv.offsetTop)

hamburgerButton.addEventListener("click",()=>{
    console.log("elvan dalton")
    

    

    
    if( sliderDiv.offsetTop == -340){
        sliderDiv.style.top="0px";
    }
    else{
        sliderDiv.style.top="-400px";

    }


})