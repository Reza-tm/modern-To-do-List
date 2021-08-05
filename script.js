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
//category var
let all = document.querySelector('.allIcon')
let fire = document.querySelector('#fire');
let heart = document.querySelector('#heart');
let tik = document.querySelector('#tik');
let alert = document.querySelector('#alert');
// let designer = document.querySelector('.RezaTm')
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
    allContainer.classList.remove('allContainer') ;
    allContainer.classList.add('allContainerChange');
    allContainer.classList.add('shadowPurple');
    allContainer.style.filter = 'blur(0)' ;
    todoAnimation.classList.add('animate__zoomInUp')
    setTimeout(()=>{
        todoAnimation.classList.remove('hidden')
    } , 1300)
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
    },800)
}

    fire.addEventListener('click' , ()=>{
        fire.classList.toggle('iconCheck')
    })
    heart.addEventListener('click' , ()=>{
        heart.classList.toggle('iconCheck')
    })
    tik.addEventListener('click' , ()=>{
        tik.classList.toggle('iconCheck')
    })
    alert.addEventListener('click' , ()=>{
        alert.classList.toggle('iconCheck')
    })
    
//------------------- ToDo selections
//Add Todo
let newTaskBtn = document.querySelector('.newTaskBtn')
let newTodoInout = document.querySelector('.todoModalInput')
let todoContainer = document.querySelector('.swiper-slide')
let deletBtn = document.querySelector('.btn-purple')
let checkBtn = document.querySelector('.btn-blue')


// add listeners
newTaskBtn.addEventListener('click' , addTodoList)
todoContainer.addEventListener('click' , checkRemove)


//
 
function addTodoList (){
    if(newTodoInout.value == "" || newTodoInout.value == ' '){
        newTaskBtn.textContent="Write something" ;
        newTaskBtn.classList.add('newTaskBtnChange')
        console.log('یجی بنویس توش بج')
    }else{
    newTaskBtn.classList.remove('newTaskBtnChange')
    newTaskBtn.textContent="New task" ;
    let todoDiv = document.createElement('div')

    if(fire.classList.contains('iconCheck')){
        todoDiv.classList.add('interesting')
    }else if (heart.classList.contains('iconCheck')){
        todoDiv.classList.add('favorite')
    }else if (tik.classList.contains('iconCheck')){
        todoDiv.classList.add('tik')
    }else if (alert.classList.contains('iconCheck')){
        todoDiv.classList.add('alert')
    }else {
        todoDiv.classList.add('allCatecory')
    }

    todoDiv.classList.add('todotext')
    let inputValue = newTodoInout.value ;
    todoDiv.innerHTML = `<li class="todo rounded-lg">
    <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 btn-purple h-5 w-5 flex-shrink-0  cursor-pointer" viewBox="0 0 20 20" fill="#db0af7bd">
    <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
    </svg>
    <p class="mx-46 todoText text-center">${inputValue}</p>
    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 btn-blue h-5 w-5 flex-shrink-0  cursor-pointer" viewBox="0 0 20 20" fill="#1c67d8ab">
    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
    </svg></li>`
    //---------
    todoContainer.appendChild(todoDiv)
    // console.log(fireClassList)
    // if(fire)
    newTodoInout.value = ' '

fire.classList.remove('iconCheck')
heart.classList.remove('iconCheck')
tik.classList.remove('iconCheck')
 alert.classList.remove('iconCheck')
}
}

function checkRemove (e){
    const classList = [ ...e.target.classList]
    const item = e.target.parentElement ;
    console.log(item)
    if(classList[1] === 'btn-purple'){
        item.style.display='none'
    }else if (classList[1] === 'btn-blue'){
        item.classList.toggle('changeText');
    }
}