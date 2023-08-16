function menuHoverBack(){
    const menuHoverBack =document.querySelector("#checkMenu")
    const leftMenu=document.querySelector(".left-menu")
if (leftMenu.attributes){
    switchDiv.innerHTML=`<i class="fa-solid fa-moon"></i>`
   
}else{
    switchDiv.innerHTML=`<i class="fa-solid fa-sun"></i>`
}
}