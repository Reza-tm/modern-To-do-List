
// variables
let allContainer = document.querySelector('.allContainer');
let animation = document.querySelector(".anime")
let todoAnimation = document.querySelector(".todoAnime")
let backBtn = document.querySelector('.closeBtn')
let frontBtn = document.querySelector('.jeloBtn')
//Add listeners

    frontBtn.addEventListener('click' , (e)=>{
        openAnimation()
    })


backBtn.addEventListener('click' ,  ()=>{
    allContainer.classList.add('allContainer') ;
    allContainer.classList.remove('allContainerChange') ;
    allContainer.style.filter = 'blur(3px)' ;
    todoAnimation.classList.remove('animate__zoomInUp')
    todoAnimation.classList.add('hidden')
    animation.classList.add('hidden') ,
    animation.classList.remove('animate__zoomInUp')
    backBtn.classList.remove('backBtn')
})
//Animation 
function nameAnimation () {
    var ml4 = {};
    ml4.opacityIn = [0,1];
    ml4.scaleIn = [0.2, 1];
    ml4.scaleOut = 3;
    ml4.durationIn = 500;
    ml4.durationOut = 300;
    ml4.delay = 200;
    
    anime.timeline({loop: false})
    .add({
        targets: '.ml4 .letters-1',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
    }).add({
        targets: '.ml4 .letters-1',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
    }).add({
        targets: '.ml4 .letters-2',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
    })
    .add({
        targets: '.ml4',
        opacity: 1,
        duration: 200,
        delay: 200
    })
}

function openAnimation (){
    allContainer.classList.remove('allContainer') ;
    allContainer.classList.add('allContainerChange');
    allContainer.style.filter = 'blur(0)' ;
    setTimeout (nameAnimation , 800)
    todoAnimation.classList.add('animate__zoomInUp')
    setTimeout(()=>{
        todoAnimation.classList.remove('hidden')
    } , 1300)
    animation.classList.remove('hidden') ,
    animation.classList.add('animate__zoomInUp')
    backBtn.classList.add('backBtn')
}