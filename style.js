
var hamburgerButton = document.getElementById("hamburgerButton");
var sliderDiv= document.getElementById("sliderid");
var selectIcon1 = document.getElementById("selectIcon1");
var selectIcon2 = document.getElementById("selectIcon2");
var selectIcon3= document.getElementById("selectIcon3");
var images=document.getElementsByClassName("images");
var queryAll=document.querySelectorAll(".help_photos img")
var bigOne= document.getElementById("big_one")

var imageCrousel= document.querySelector(".image_container");
var imagesAfrica= document.querySelectorAll(".image_container img");
var prevsBtn= document.getElementById("prevsBtn")
var nextBtn= document.getElementById("nextBtn")
var counter=1;
try{
    var photoWidth=imagesAfrica[counter].clientWidth;
    nextBtn.addEventListener("click",()=>{
        imageCrousel.style.transition ="transform ease-in-out 0.4s";
        console.log("counter",counter,imagesAfrica.length)
        if (counter>=imagesAfrica.length-1){
            counter=imagesAfrica.length-1;
        }
        else{
    
            counter++;
        }
        
        imageCrousel.style.transform="translateX(-"+imageCrousel.clientWidth*counter+"px)";
    
    })
    prevsBtn.addEventListener("click",()=>{
        imageCrousel.style.transition ="transform ease-in-out 0.4s";
        if (counter<=0){
            counter=0;
        }
        else{
    
            counter--;
        }
       
        console.log("prevsBtn",imageCrousel.clientWidth*counter, counter)
        imageCrousel.style.transform="translateX(-"+imageCrousel.clientWidth*counter+"px)";
    })
    
    
}
catch (err)
{
    var photoWidth=null

}




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