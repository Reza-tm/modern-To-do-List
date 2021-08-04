//data
let todoData = {
    firstName : "Reza" ,
    lastName : "Sobhgol",
    interestingNum : 31 ,
    favoriteNum : 81 ,
    doneNum : 51,
    uncompleteNum : 51 ,
}
// TextContent
//FullName
let firstName = document.querySelector('.firstName') ;
firstName.textContent = todoData.firstName
let lastName = document.querySelector('.lastName');
lastName.textContent = todoData.lastName
//Categories number
let interstingNum = document.querySelector('.interstingNum')
interstingNum.textContent = todoData.interestingNum
let favoriteNum  = document.querySelector('.favoriteNum')
favoriteNum.textContent = todoData.favoriteNum
let doneNum  = document.querySelector('.doneNum')
doneNum.textContent = todoData.doneNum
let uncompleteNum  = document.querySelector('.uncompleteNum')
uncompleteNum.textContent = todoData.uncompleteNum
//consistency
consistencyfunc(todoData.doneNum , todoData.uncompleteNum)
function consistencyfunc (finish , unfinish){
    let resaultIcon = document.querySelector('.consistencyIcon') 
    if(finish < unfinish){
        resaultIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" viewBox="0 0 20 20" fill="#EF4444">
        <path fill-rule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clip-rule="evenodd" />
      </svg><p class="consistency text-xs opacity-40">Bad</p>` ;
    } else{
        resaultIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" viewBox="0 0 20 20" fill="#6EE7B7">
        <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd" />
    </svg>
    <p class="consistency text-xs opacity-40">Good</p>` ;
    }
}
// variables
let allContainer = document.querySelector('.allContainer');
let animation = document.querySelector(".anime")
let todoAnimation = document.querySelector(".todoAnime")
let backBtn = document.querySelector('.closeBtnIcon')
let frontBtn = document.querySelector('.jeloBtn')
let closeAnimation =document.querySelector('.anime-close')
let todoSection = document.querySelector('#todoAll')
let designer = document.querySelector('.RezaTm')
let todoModalBase = document.querySelector('.TodoModal')
let  addTodoBtn = document.querySelector('.addBtnIcon')
let  closeTodoBtn = document.querySelector('.todoModalClose')
//Add listeners
frontBtn.addEventListener('click' , (e)=>{
    openAnimation()
})
frontBtn.addEventListener('click' , (e)=>{
    setTimeout (nameAnimation , 800)
},{once : true })
backBtn.addEventListener('click' ,  (e)=>{
    closeAnimationFunc()
})
addTodoBtn.addEventListener('click' , ()=>{
    todoModalBase.classList.add('todoModalChange')
    allContainer.classList.remove('shadowPurple')
    allContainer.classList.add('shadowBlue')
    closeTodoBtn.style.transform= 'rotate(90deg)'
})
closeTodoBtn.addEventListener('click' , ()=>{
    closeTodoBtn.style.transform= 'rotate(45deg)'
    setTimeout(()=>{
        todoModalBase.classList.remove('todoModalChange')
        allContainer.classList.remove('shadowBlue')
        allContainer.classList.add('shadowPurple')
    },400)
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
    designer.classList.remove('animate__fadeOut')
    allContainer.classList.remove('allContainer') ;
    allContainer.classList.add('allContainerChange');
    allContainer.classList.add('shadowPurple');
    allContainer.style.filter = 'blur(0)' ;
    todoAnimation.classList.add('animate__zoomInUp')
    setTimeout(()=>{
        todoAnimation.classList.remove('hidden')
    } , 1300)
    setTimeout(()=>{
        designer.classList.remove('hidden')
    } , 1300)
    setTimeout(()=>{
        designer.classList.add('animate__fadeIn')
    }, 1300)
    animation.classList.remove('hidden') ,
    animation.classList.add('animate__zoomInUp')
    backBtn.classList.add('backBtn')
    closeAnimation.classList.remove('animate__zoomOutDown')
    todoSection.classList.remove('animate__zoomOutDown')
}

function closeAnimationFunc (){
    todoAnimation.classList.remove('animate__zoomInUp')
    animation.classList.remove('animate__zoomInUp')
    backBtn.classList.remove('backBtn')
    closeAnimation.classList.add('animate__zoomOutDown')
    todoSection.classList.add('animate__zoomOutDown')
    allContainer.classList.remove('shadowPurple')
    setTimeout(()=>{
        allContainer.style.filter = 'blur(3px)' ;
        allContainer.classList.remove('allContainerChange') ;
        allContainer.classList.add('allContainer') ;
        designer.classList.add('hidden')
    },800)
    designer.classList.remove('animate__fadeIn')
    designer.classList.add('animate__fadeOut')
}
categoryIcons()
function categoryIcons(){
    let fire = document.querySelector('.fireIcon');
    let heart = document.querySelector('.heartIcon');
    let tik = document.querySelector('.tikIcon');
    let alert = document.querySelector('.alertIcon');
    fire.addEventListener('click' , ()=>{
        fire.classList.remove('opacity-70');
        fire.classList.add('text-yellow-300');
        heart.classList.add('opacity-70')
        heart.classList.remove('text-red-700')
        tik.classList.add('opacity-70')
        tik.classList.remove('text-green-300')
        alert.classList.add('opacity-70')
        alert.classList.remove('text-pink-300')
    })
    heart.addEventListener('click' , ()=>{
        heart.classList.remove('opacity-70')
        heart.classList.add('text-red-700')
        tik.classList.add('opacity-70')
        tik.classList.remove('text-green-300')
        alert.classList.add('opacity-70')
        alert.classList.remove('text-pink-300')
        fire.classList.add('opacity-70');
        fire.classList.remove('text-yellow-300');
    })
    tik.addEventListener('click' , ()=>{
        tik.classList.remove('opacity-70')
        tik.classList.add('text-green-300')
        alert.classList.add('opacity-70')
        alert.classList.remove('text-pink-300')
        fire.classList.add('opacity-70');
        fire.classList.remove('text-yellow-300');
        heart.classList.add('opacity-70')
        heart.classList.remove('text-red-700')
    })
    alert.addEventListener('click' , ()=>{
        alert.classList.remove('opacity-70')
        alert.classList.add('text-pink-300')
        fire.classList.add('opacity-70');
        fire.classList.remove('text-yellow-300');
        heart.classList.add('opacity-70')
        heart.classList.remove('text-red-700')
        tik.classList.add('opacity-70')
        tik.classList.remove('text-green-300')
    })
}