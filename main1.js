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



// const animItems = document.querySelectorAll('._anim-items');

// if(animItems.length > 0){
//     window.addEventListener('scroll', animOnScroll);
//     function animOnScroll(){
//         for (let index = 0; index < animItems.length; index++) {
//             const animItem = animItems[index];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 4;

//             let animItemPoint = window.innerHeight - animItemHeight / animStart;
//             if(animItemHeight > window.innerHeight){
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }

//             if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
//                 animItem.classList.add('._active');
//             } else{
//                 animItem.classList.remove('._active');
//             }

//         }
//     }
//     function offset(el){
//         const rect = el.getBoundingClientRect(),
//             scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//             scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         return{top: rect.top + scrollTop, left: rect.left + scrollLeft}
//     }

//     setTimeout (() => {
//         animOnScroll();
//     }, 300);
// }

