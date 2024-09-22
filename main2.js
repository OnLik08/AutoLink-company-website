const headerEl=document.getElementById("header")


window.addEventListener("scroll", function(){
    const scrollPos = window.scrollY

    if(scrollPos>20){
        headerEl.classList.add("header_mini")
    }else{
        headerEl.classList.remove("header_mini")
    }
    // console.log(scrollPos);
})

document.querySelector('button').onclick=myClick;
function myClick(){
    console.log('work');
    let a=document.querySelector('.search__car').value;
    console.log(a);
}


const scrollUp = document.querySelector('.logo-car-wrap');
scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});