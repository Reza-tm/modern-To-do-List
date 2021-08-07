//data
let todoData = {
    firstName : "Reza" ,
    lastName : "Sobhgol",
}
// TextContent
//FullName
let firstName = document.querySelector('.firstName') ;
firstName.textContent = todoData.firstName
let lastName = document.querySelector('.lastName');
lastName.textContent = todoData.lastName
//consistency
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

//category selection
let interstingNum = document.querySelector('.interstingNum')
let favoriteNum  = document.querySelector('.favoriteNum')
let uncompleteNum  = document.querySelector('.uncompleteNum')
let doneNum  = document.querySelector('.doneNum')
let allNum = document.querySelector('.AllNum')

let interestingBox = document.querySelector('.IntestingBox')
let allBox = document.querySelector('.allBox')
let favoriteBox = document.querySelector('.favoriteBox')
let doneBox = document.querySelector('.doneBox')
let UncompleteBox = document.querySelector('.UncompleteBox')
//
function checkRemove (e){
    const classList = [ ...e.target.classList]
    const item = e.target.parentElement ;
    if(classList[1] === 'btn-purple'){
        item.parentElement.remove()
    }else if (classList[1] === 'btn-blue'){
        item.classList.toggle('changeText');
        item.parentElement.classList.add('tik')
    }
}
function addTodoList (){
    
    if(newTodoInout.value == "" || newTodoInout.value == ' '){
        newTaskBtn.textContent="Write something" ;
        newTaskBtn.classList.add('newTaskBtnChange')
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
        todoDiv.classList.add('todoBox')
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
        saveLocalTodo(inputValue)
        newTodoInout.value = ' '
        
        fire.classList.remove('iconCheck')
        heart.classList.remove('iconCheck')
        tik.classList.remove('iconCheck')
        alert.classList.remove('iconCheck')
        
        allBox.addEventListener('click' , ()=>{
            if(todoDiv.className.includes('todoBox')){
                todoDiv.style.display='block'
            }else{
                todoDiv.style.display='none'
            }; 
        })
        interestingBox.addEventListener('click' , ()=>{
            if(todoDiv.className.includes('interesting')){
                todoDiv.style.display='block'
            }else{
                todoDiv.style.display='none'
            };   
        })
        favoriteBox.addEventListener('click' , ()=>{
            if(todoDiv.className.includes('favorite')){
                todoDiv.style.display='block'
            }else{
                todoDiv.style.display='none'
            };   
        })
        doneBox.addEventListener('click' , ()=>{
            if(todoDiv.className.includes('tik')){
                todoDiv.style.display='block'
            }else{
                todoDiv.style.display='none'
            };   
        })
        UncompleteBox.addEventListener('click' , ()=>{
            if(todoDiv.className.includes('alert')){
                todoDiv.style.display='block'
            }else{
                todoDiv.style.display='none'
            };   
        })
        let intNum = ($(".swiper-slide div.interesting").length)
        let intCategoryNum = document.querySelector('.intCategoryNum') ; 
        intCategoryNum.textContent = intNum
        interstingNum.textContent = intNum ;
        let favNum = ($(".swiper-slide div.favorite").length)
        let favCategoryNum = document.querySelector('.favCategoryNum') ;
        favCategoryNum.textContent = favNum
        favoriteNum.textContent = favNum ;
        let doneNumber = ($(".swiper-slide div.tik").length)
        let doneCategoryNum = document.querySelector('.doneCategoryNum')
        doneCategoryNum.textContent = doneNumber
        doneNum.textContent = doneNumber
        let unNum = ($(".swiper-slide div.alert").length)
        let unCategoryNum = document.querySelector('.unCategoryNum')
        unCategoryNum.textContent = unNum
        uncompleteNum.textContent = unNum
        let alNum = ($(".swiper-slide div").length)
        let allCategoryNum = document.querySelector('.allCategoryNum')
        allCategoryNum.textContent = alNum
        allNum.textContent = alNum
        let consistency = document.querySelector('.consistencyIcon')
        if(doneNumber < unNum){
            consistency.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" viewBox="0 0 20 20" fill="#EF4444">
            <path fill-rule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clip-rule="evenodd" />
            </svg><p class="consistency text-xs opacity-40">Bad</p>`
        }else{
            consistency.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" viewBox="0 0 20 20" fill="#6EE7B7">
            <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd" />
            </svg>
            <p class="consistency text-xs opacity-40">Good</p>`
        }
        //data numbers 
    }
}
function saveLocalTodo (todo){
    let savedTodos = localStorage.getItem('kooft') ? JSON.parse(localStorage.getItem('kooft')) : [] ;
    savedTodos.push(todo);
    // console.log(savedTodos);
    localStorage.setItem('kooft' , JSON.stringify(savedTodos))
}

document.addEventListener('DOMContentLoaded' , loadLocalTodo)

function loadLocalTodo(){
    let savedTodos = localStorage.getItem('kooft') ? JSON.parse(localStorage.getItem('kooft')) : [] ;
    savedTodos.forEach((toodo)=>{
        console.log(toodo)
        let todoDiv = document.createElement('div')

        todoDiv.classList.add('todotext')
        todoDiv.classList.add('todoBox')
        todoDiv.innerHTML = `<li class="todo rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 btn-purple h-5 w-5 flex-shrink-0  cursor-pointer" viewBox="0 0 20 20" fill="#db0af7bd">
        <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
        <p class="mx-46 todoText text-center">${toodo}</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 btn-blue h-5 w-5 flex-shrink-0  cursor-pointer" viewBox="0 0 20 20" fill="#1c67d8ab">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg></li>`
        todoContainer.appendChild(todoDiv)

        let alNum = ($(".swiper-slide div").length)
        let allCategoryNum = document.querySelector('.allCategoryNum')
        allCategoryNum.textContent = alNum
        allNum.textContent = alNum
    })
}

